import program from "../";
import { change_name } from "../utils/change_projectname";
import { download_git } from "../utils/download-git";

type InitOptionsType = {
    project_name: string
    project_type: 'ts' | 'js'
}

function initCommands() {
    program
        .command('init')
        .argument('[project_name]', 'a project name', 'cth-backend')
        .argument('[project_type]', 'use ts or js', 'ts')
        .description('init a back-end project')
        .action(async function (
            project_name: InitOptionsType['project_name'],
            project_type: InitOptionsType['project_type']
        ) {
            const options = program.opts();
            let branch_name = 'main'
            let repo_path = 'cth166/sqts-template'
            if (project_name === 'testdemo') branch_name = 'testdemo'

            try {
                await download_git(options.gitee, repo_path, branch_name, project_name)
                await change_name(project_name)
                stdout_after_success(project_name)
            } catch (error) {
                console.log(error);
            }

        })

}

function stdout_after_success(project_name: string) {
    process.stdout.write("\x1b[32m\x1b[1minit success!\x1b[0m\n");
    process.stdout.write(`cd ./${project_name} Then you can run:👇\n`);
    process.stdout.write("\x1b[36m\x1b[1mpnpm i\x1b[0m\n");
    process.stdout.write("\x1b[32m\x1b[1mMore scripts in package.json.\x1b[0m\n");
    process.stdout.write("\x1b[32m\x1b[1mHappy Coding!😀\x1b[0m\n");
}

export default initCommands;
