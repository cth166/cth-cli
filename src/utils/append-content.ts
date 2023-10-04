import { open } from 'node:fs/promises'

type IType = {
    filePath: string
    content: string
}

async function append_content({ filePath, content }: IType) {
    const fh = await open(filePath, 'r+');
    const stas = await fh.stat()
    const write_stream = fh.createWriteStream({ start: stas.size })
    write_stream.write(content)
}

export {
    append_content
}
