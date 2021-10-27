import express from 'express'
import { DataStore } from './data'

const app = express()

app.get('/', (req, res) => {
    res.json(DataStore.list)
})

app.listen(8080, () => {
    console.log('服务器已经启动了')
})