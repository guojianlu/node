const fs = require('fs')
const path = require('path')
const marked = require('marked')
const browserSync = require('browser-sync')

/**
 * 01 读取 md 内容
 * 02 将上述读取出来的内容替换占位符，生产一个最终需要展示的 html 字符串
 * 03 将上述的 html 字符串写入指定的 html 文件中
 * 04 监听 md 文档内容的变化，然后更新 html 内容
 * 05 使用 browser-sync 来实时显示 html 内容
 */

let mdPath = path.join(__dirname, process.argv[2])
let htmlPath = mdPath.replace(path.extname(mdPath), '.html')

function compile() {
    fs.readFile(mdPath, 'utf-8', (err, data) => {
        // 将 md --> html
        let htmlStr = marked(data)
        let retHtml = temp.replace('{{content}}', htmlStr)
        // 将上述的内容写入到指定的 html 文件中，用于在浏览器里进行展示
        fs.writeFile(htmlPath, retHtml, (err) => {
            console.log('生产成功了')
        })
    })
}

compile()

fs.watchFile(mdPath, (curr, prev) => {
    if (curr.mtime !== prev.mtime) {
        compile()
    }
})

browserSync.init({
    browser: '',
    server: __dirname,
    watch: true,
    index: path.basename(htmlPath)
})

const temp = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.bootcdn.net/ajax/libs/github-markdown-css/4.0.0/github-markdown.css" rel="stylesheet">
        <title>md-to-html</title>
        <style>
            .markdown-body {
                box-sizing: border-box;
                min-width: 200px;
                max-width: 980px;
                margin: 0 auto;
                padding: 45px;
            }
            @media (max-width: 767px) {
                .markdown-body {
                    padding: 15px;
                }
            }
        </style>
    </head>
    <body>
    <article class="markdown-body">
        {{content}}
    </article>
    </body>
    </html>
`
