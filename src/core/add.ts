import { writeFileSync } from 'node:fs'
import program from "../";
import { get_capitalizeInitialName, get_lowerInitialName } from "../utils/normalize-name";
import { compile_ejs } from "../utils/compile-ejs";
import { append_content } from '../utils/append-content';

type AddOptionsType = {
    model_name: string
}

function addCommands() {
    program
        .command('add')
        .argument('<model_name>', 'a model name')
        .description('add a table and a easy router')
        .action(async function (
            model_name: AddOptionsType['model_name'],
        ) {
            console.log(`add ${model_name} success`);
            model_name = get_lowerInitialName(model_name)
            const cmodel_name = get_capitalizeInitialName(model_name)

            const model_str = await compile_ejs('model', model_name)
            writeFileSync(`src/db/models/${cmodel_name}.ts`, model_str)

            const router_str = await compile_ejs('router', model_name)
            writeFileSync(`src/routers/${model_name}.ts`, router_str)

            append_content({
                filePath: `src/db/models/index.ts`,
                content: `export { ${cmodel_name} } from "./${cmodel_name}";\n`
            })

            append_content({
                filePath: `src/routers/subRouters.ts`,
                content: `export { ${model_name}_router as ${model_name} } from './${model_name}';\n`
            })
        })
}

export default addCommands;
