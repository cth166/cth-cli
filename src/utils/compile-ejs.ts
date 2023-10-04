import { resolve, dirname } from 'node:path'
import { fileURLToPath } from "node:url"
import { get_capitalizeInitialName } from './normalize-name'
import ejs from 'ejs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); // __dirname是dist文件夹


function compile_ejs(type: 'model' | 'router', name: string): Promise<string> {
    const template_path = resolve(__dirname, `../src/ejs-templates/${type}.ejs`)
    const capitalizeInitialName = get_capitalizeInitialName(name)

    return new Promise((res, reject) => {
        ejs.renderFile(template_path, {
            name,
            capitalizeInitialName
        }, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            res(result)
        })
    })
}


export {
    compile_ejs,
}
