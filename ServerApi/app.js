const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const cors = require('koa2-cors')
const koaBody = require('koa-body')

const router = new Router()

const LISTENPORT = 3333

// 跨域
app.use(cors({
    // origin: ['http://localhost:3000'],
    origin: ['*'],
    credentials: true
}))

// 接收post参数解析
app.use(koaBody({
    multipart: true,
}))

app.use(async (ctx, next)=>{
    // ctx.set('Access-Control-Allow-Origin','*')
    console.log('全局中间件')
    // ctx.body = 'Hello Wolrd'
    await next()
})

const user = require('./controller/user')
const organization = require('./controller/organization')

router.use('/api/user', user.routes())
router.use('/api/organization', organization.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(LISTENPORT, ()=>{
    console.log(`服务开启在${LISTENPORT}端口`)
})

// MVC