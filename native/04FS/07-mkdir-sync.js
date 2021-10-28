const fs = require('fs')
const path  = require('path')

function makeDirSync(dirPath) {
    const items = dirPath.split(path.sep)
    for (let i = 1; i <= items.length; i++) {
       let dir = items.slice(0, i).join(path.sep)
       try {
           fs.accessSync(dir)
       } catch (err) {
           fs.mkdirSync(dir)
       }      
    }
}

makeDirSync('a\\b\\c')