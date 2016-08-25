const router = require('koa-router')();
const config = require(__dirname + '/../config/options.js');

router.get('/', (ctx) => {
  var time_stamp = new Date().getTime();
  return ctx.render('index', {
    app_name: config.app_name,
    time_stamp: time_stamp
  })
})

module.exports = router;
