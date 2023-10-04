import { promisify } from "node:util";
import { exec } from 'node:child_process'
const download = promisify(require('download-git-repo'))
const exec_promise = promisify(exec)


async function download_git(isGitee: boolean, repo_path: string, branch_name: string, project_name: string) {
    if (isGitee) {
        await download_gitee(repo_path, branch_name, project_name)
    } else {
        await download_github(`${repo_path}#${branch_name}`, project_name)
        await exec_promise(`cd ${project_name} && git init`)
    }
}

async function download_gitee(repo_path: string, branch_name: string, project_name: string) {
    await exec_promise(`git clone -b ${branch_name} https://gitee.com/${repo_path}.git ${project_name}`)
}

async function download_github(repo_path: string, project_name: string) {
    await download(repo_path, project_name, { clone: true })
}


export {
    download_git
}