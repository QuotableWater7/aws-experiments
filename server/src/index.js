'use strict'

const Koa = require('koa')
const router = require('koa-router')

const app = new Koa()

const staticRouter = router()

staticRouter.get('/', async ctx => {
  ctx.body = 'hello'
})

app.use(staticRouter.routes())

app.listen(3000)
