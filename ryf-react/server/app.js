const Koa = require('koa');
const cors = require('koa-cors')
const app = new Koa();
const router = require('./routers/index');
// 组件 ，中间件技术
// const main = ctx => {
//     ctx.response.body= 'Hello World';
// }
// app.use(main);
// 允许跨域访问
app.use(cors({
    origin: 'http://localhost:3000',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authenticate'],
    maxAge: 5,
    allowMethods: ['GET','POST'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    cradentials: true
}))
app.use(router.routes())
app.listen(3006);
console.log('app started at port 3006...')