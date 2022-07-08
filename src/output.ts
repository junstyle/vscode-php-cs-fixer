import { window, StatusBarAlignment } from 'vscode'

let outputChannel = null
let statusBarItem = null

function createOutput() {
  if (outputChannel == null) {
    outputChannel = window.createOutputChannel('php-cs-fixer')
  }
}

export function output(str) {
  createOutput()
  outputChannel.appendLine(str)
}

export function showOutput() {
  createOutput()
  outputChannel.show(true)
}

export function clearOutput() {
  outputChannel?.clear()
}

export function statusInfo(str) {
  if (statusBarItem == null) {
    statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left, -10000000)
    statusBarItem.command = 'php-cs-fixer.showOutput'
    statusBarItem.tooltip = 'php-cs-fixer: show output'
  }

  statusBarItem.show()
  statusBarItem.text = 'php-cs-fixer: ' + str
}

export function hideStatusBar() {
  statusBarItem?.hide()
}

export function disposeOutput() {
  if (outputChannel) {
    outputChannel.clear()
    outputChannel.dispose()
  }
  if (statusBarItem) {
    statusBarItem.hide()
    statusBarItem.dispose()
  }
  outputChannel = null
  statusBarItem = null
}
