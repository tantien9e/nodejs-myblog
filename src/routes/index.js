const newRouter = require('./news')
const siteRouter = require('./site')

function route(app) {
    // app.get('/news', (req,res) => {
    //     return res.render('news')
    // })
    app.use('/', siteRouter)
    app.use('/news', newRouter)
}
module.exports = route
