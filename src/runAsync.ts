import { spawn, SpawnOptionsWithoutStdio } from 'child_process'

export function runAsync(command: string, args: string[], options: SpawnOptionsWithoutStdio, onData: Function = null) {
  const cp = spawn(command, args, options)

  const promise = new Promise((resolve, reject) => {
    let stdout = null
    let stderr = null

    cp.stdout &&
      cp.stdout.on('data', (data) => {
        stdout = stdout || Buffer.from('')
        stdout = Buffer.concat([stdout, data])
        onData && onData(data)
      })

    cp.stderr &&
      cp.stderr.on('data', (data) => {
        stderr = stderr || Buffer.from('')
        stderr = Buffer.concat([stderr, data])
        // stdout = stdout || Buffer.from('');
        // stdout = Buffer.concat([stdout, data]);
        onData && onData(data)
      })

    const cleanupListeners = () => {
      cp.removeListener('error', onError)
      cp.removeListener('close', onClose)
    }

    const onError = (err) => {
      cleanupListeners()
      reject(err)
    }

    const onClose = (code) => {
      cleanupListeners()

      const resolved = resolveRun(code, stdout, stderr)

      if (resolved instanceof Error) {
        reject(resolved)
      } else {
        resolve(resolved)
      }
    }

    cp.on('error', onError).on('close', onClose)
  })

  ;(promise as any).cp = cp

  return promise
}

function resolveRun(exitCode, stdout, stderr) {
  stdout = stdout && stdout.toString()
  stderr = stderr && stderr.toString()

  if (exitCode !== 0) {
    return Object.assign(new Error(`Command failed, exited with code #${exitCode}`), {
      exitCode,
      stdout,
      stderr,
    })
  }

  return {
    stdout,
    stderr,
  }
}
