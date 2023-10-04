import { readFile, writeFile } from 'node:fs/promises'

async function change_name(name: string) {
    const filePath = `${name}/package.json`
    const json = await readFile(filePath, 'utf-8')
    const lines = json.split('\n')

    lines[1] = lines[1].replace('sqts-template', name)
    const modifiedData = lines.join('\n')
    await writeFile(filePath, modifiedData, 'utf-8');
}

export {
    change_name
}