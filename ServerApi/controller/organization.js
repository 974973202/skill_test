const Router = require("koa-router");
const router = new Router();

const organizationList = [{ name: "Ekas Pty Ltd" }];

router.get("/list", (ctx, next) => {
  ctx.body = {
    code: 200,
    data: organizationList,
  };
});

router.post("/add", async (ctx, next) => {
  const params = ctx.request.body;
  organizationList.push(params);
  ctx.body = {
    code: 200,
    data: [],
  };
});

module.exports = router;
