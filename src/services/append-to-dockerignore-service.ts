import {existsSync, writeFileSync, readFileSync, appendFileSync} from 'node:fs'

class AppendToDockerignoreService {
  get dockerignore(): string {
    return '.dockerignore'
  }

  get envFormat(): string {
    return '.env*' // asterisk
  }

  get envProjectFormat(): string {
    return '!.env.project'
  }

  missing(): boolean {
    return !existsSync(this.dockerignore)
  }

  append(str: string): void {
    appendFileSync(this.dockerignore, str)
  }

  touch(): void {
    writeFileSync(this.dockerignore, '')
  }

  read(): string {
    return readFileSync(this.dockerignore, 'utf8')
  }

  async run(): Promise<void> {
    let envExists = false
    let envProjectExists = false

    if (this.missing()) {
      // ignore. must not be a docker project
    } else {
      // 2. iterate over dockerignore lines
      const lines = this.read().split(/\r?\n/)

      // 3. for each line check if ignore already exists
      for (const line of lines) {
        const trimLine = line.trim()

        if (trimLine === this.envFormat) {
          envExists = true
        }

        if (trimLine === this.envProjectFormat) {
          envProjectExists = true
        }
      }

      // 4. add ignore if it does not already exist
      if (envExists === false) {
        this.append('\n' + this.envFormat)
      }

      if (envProjectExists === false) {
        this.append('\n' + this.envProjectFormat)
      }
    }
  }
}

export {AppendToDockerignoreService}
