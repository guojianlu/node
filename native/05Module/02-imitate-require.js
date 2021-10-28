const fs = require('fs')
const vm = require('vm')
const path = require('path')

function Module(id) {
    this.id = id
    this.exports = {}
}

Module._resolveFilename = function(filename) {
    let absPath = path.resolve(__dirname, filename)

    // 判断当前路径对应的内容是否存在
    if (fs.existsSync(absPath)) {
        // 如果条件成立说明 absPath 对应的内容是存在的
        return absPath
    } else {
        // 文件定位
        let suffix = Object.keys(Module._extensions)
        for (let i = 0; i < suffix.length; i++) {
           let newPath = absPath + suffix[i]
           if (fs.existsSync(newPath)) {
               return newPath
           }
        }
    }
    throw new Error(`${filename} is not exists`)
}

Module._extensions = {
    '.js'(module) {
        // 读取
        let content = fs.readFileSync(module.id, 'utf-8')

        // 包裹
        content = Module.wrapper[0] + content + Module.wrapper[1]

        // VM
        let compileFn = vm.runInThisContext(content)

        // 准备参数值
        let exports = module.exports
        let dirname = path.dirname(module.id)
        let filename = module.id

        // 调用
        compileFn.call(exports, exports, myRequire, module, filename, dirname)
    },
    '.json'(module) {
        let content = JSON.parse(fs.readFileSync(module.id, 'utf-8'))
        
        module.exports = content
    }
}

Module.wrapper = [
    '(function(exports, require, module, __filename, __dirname) {',
    '})'
]

Module._cache = {}

Module.prototype.load = function() {
    let extname = path.extname(this.id)

    Module._extensions[extname](this)
}

function myRequire(filename) {
    // 1 获取绝对路径
    const mPath = Module._resolveFilename(filename)
    
    // 2 缓存优先
    let cacheModule = Module._cache[mPath]
    if (cacheModule) return cacheModule.exports

    //3 创建空对象加载目标模块
    let module = new Module(mPath)

    // 4 缓存已经加载过的模块
    Module._cache[mPath] = module

    // 5 执行加载 （编译执行）
    module.load()

    // 6 返回数据
    return module.exports
}

let obj = myRequire('./v')
console.log(obj)
