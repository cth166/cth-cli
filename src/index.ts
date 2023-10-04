import { Command } from 'commander'
import * as core from './core'

const program = new Command();


program.version(require('../package.json').version)


// 添加所有子命令
for (const [_, fn] of Object.entries(core)) fn()
program.parse()


export default program
