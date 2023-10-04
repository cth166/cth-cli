import ejs from 'ejs'
import { it, expect, describe } from 'vitest'

describe('ejs-render', () => {

    it.skip('happy path', () => {
        const templateString = `
            <!DOCTYPE html>
            <html>
            <head>
                <title><%= title %></title>
            </head>
            <body>
                <h1><%= heading %></h1>
                <p><%= content %></p>
            </body>
            </html>
        `
        const data = {
            title: "My Page",
            heading: "Welcome to My Page",
            content: "This is some content for my page."
        }
        const renderedHTML = ejs.render(templateString, data)
        expect(renderedHTML).toBe(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>My Page</title>
            </head>
            <body>
                <h1>Welcome to My Page</h1>
                <p>This is some content for my page.</p>
            </body>
            </html>
        `
        )
    })

    it('given an absolute path', async () => {
        // const temp = await test_model_ejs()
        const temp = await compile_model_ejs('user')
        expect(temp).toMatchSnapshot()
    })
})


//生成快照用的临时方法
function test_model_ejs() {
    const model_path = String.raw`E:\cth-cli\src\ejs-templates\model.ejs`
    return new Promise((resolve, reject) => {
        ejs.renderFile(model_path, {
            name: 'user',
            capitalizeInitialName: 'User'
        }, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

// 测试用的 写死绝对路径的方法，因为__dirname不一样，不太好测
function compile_model_ejs(name: string) {
    const model_path = String.raw`E:\cth-cli\src\ejs-templates\model.ejs`
    const capitalizeInitialName = name.charAt(0).toUpperCase() + name.slice(1)

    return new Promise((res, reject) => {
        ejs.renderFile(model_path, {
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
