let time = new Date().toUTCString();
function updateTime() {
  setInterval(() => {
    time = new Date().toUTCString();
  }, 1000)
}
updateTime()

const http = require('http')
http.createServer((req, res) => {
  const { url } = req
  if (url === '/') {
    res.end(`
      <html>
        Html Update Time ${time}
        <script src='main.js'></script>
      </html>
    `)
  } else if (url === '/main.js') {
    const content = `document.writeln('<br>JS Update Time: ${time}')`
    /**
     * 强缓存: Expires | Cache-Control: max-age=20
     */
    // res.setHeader('Expires', new Date(Date.now() + 10 * 1000).toUTCString())
    // res.setHeader('Cache-Control', 'max-age=20')

    /**
     * 协商缓存
     * 1. Cache-Control: no-cache 不直接使用缓存，向服务加验证资源是否过期
     * 2. Last-Modified/If-Modified-Since | Etag/If-None-Match
     */
    res.setHeader('Cache-Control', 'no-cache')
    
    // res.setHeader('Last-Modified', new Date().toUTCString())
    // if (new Date(req.headers['if-modified-since']).getTime() + 3 * 1000 > Date.now()) {
    //   console.log('协商缓存命中。。。')
    //   res.statusCode = 304
    //   res.end()
    //   return
    // }

    const crypto = require('crypto')
    const hash = crypto.createHash('sha1').update(content).digest('hex')
    res.setHeader('Etag', hash)
    if (req.headers['if-none-match'] === hash) {
      console.log('Etag 缓存命中')
      res.statusCode = 304
      res.end()
      return
    }

    res.statusCode = 200
    res.end(content)
  } else if (url === '/favicon.ico') {
    res.end('')
  }
})
.listen(3000, () => {
  console.log('Http Cache Test Run At 3000 Port')
})

// 探索内容：service worker