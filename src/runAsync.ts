import { spawn, SpawnOptionsWithoutStdio } from 'child_process';
import { output } from './output';

export function runAsync(command: string, args: string[], options: SpawnOptionsWithoutStdio, onData: (data: Buffer) => void = null) {
  const cpOptions = Object.assign({}, options, { shell: process.platform == 'win32', })
  let cp;
  try {
    if (process.platform == 'win32') {
      if (command.includes(" ") && command[0] != '"') {
        command = '"' + command + '"'
      }
    }

    output('runAsync: spawn ' + command);
    output(JSON.stringify(args, null, 2))
    output(JSON.stringify(cpOptions, null, 2))

    cp = spawn(command, args, cpOptions)
  } catch (err) {
    const promise = new Promise((resolve, reject) => {
      output('runAsync: error')
      output(JSON.stringify(err, null, 2))
      output('runAsync: reject promise')
      reject(err)
    })
      ; (promise as any).cp = cp

    return promise
  }

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

      output('runAsync: error')
      output(JSON.stringify(err, null, 2))
      output('runAsync: reject promise')
      reject(err)
    }

    const onClose = (code) => {
      cleanupListeners()

      const resolved = resolveRun(code, stdout, stderr)

      if (resolved instanceof Error) {
        output('runAsync: error')
        output(JSON.stringify(resolved, null, 2))
        output('runAsync: reject promise')
        reject(resolved)
      } else {
        output('runAsync: success')
        output(JSON.stringify(resolved, null, 2))
        output('runAsync: resolve promise')
        resolve(resolved)
      }
    }

    cp.on('error', onError).on('close', onClose)
  })

    ; (promise as any).cp = cp

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
