export class PHPCSFixerConfig {
  onsave: boolean
  autoFixByBracket: boolean
  autoFixBySemicolon: boolean
  executablePath: string
  rules: string | Object
  config: string
  formatHtml: boolean
  documentFormattingProvider: boolean
  allowRisky: boolean
  pathMode: 'pathMode' | 'override'
  ignorePHPVersion: boolean
  exclude: string[]
  pharPath: string
  editorFormatOnSave: boolean
  // fileAutoSave: boolean
  // fileAutoSaveDelay: number
  tmpDir: string
}
