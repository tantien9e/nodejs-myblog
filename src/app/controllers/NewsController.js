class NewsController {
    // [Get] / news
    index(req, res) {
        res.render('news')
    }
    get(req, res) {
        res.render('news')
    }
    show(req, res) {
        res.send('This is a new news')
    }
}

module.exports = new NewsController()
