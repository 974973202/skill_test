const Router = require('koa-router')
const router = new Router()
const { v4 } = require('uuid');

const userList = [
  {
    id: 1,
    name: "Monica",
    email: "monica.li@ekas.com",
    permissions: "owner",
  },
  {
    id: 2,
    name: "Lawrence",
    email: "lawrence.liu@ekas.com",
    permissions: "can edit",
  },
];

router.get('/list', (ctx, next)=>{
    // const params = ctx.request.query
    
    ctx.body = {
        code: 200,
        data: userList
    }

})

router.post('/add', async(ctx, next)=>{
    const params = ctx.request.body;
    if (params.id) {
      userList.forEach(ele => {
        if(ele.id == params.id) {
          ele.permissions = params.permissions
        }
      })
    } else {
      params.id = v4()
      userList.push(params)
    }
    ctx.body = {
        code: 200,
        data: []
    }
})

module.exports = router
