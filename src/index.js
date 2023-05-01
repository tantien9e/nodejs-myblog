const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes/index')

//Middleware for form submission
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Static variables
app.use(express.static(path.join(__dirname, 'public')))

//HTTP logging configuration
app.use(morgan('combined'))

//Template configuration
//The code below navigate to the main.handlebars template
const hbs = handlebars.create({
    defaultLayout: 'main',
    layoutsDir: 'src/resources/views/layouts',
    partialsDir: 'src/resources/views/partials',
    extname: '.hbs',
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

//The code below change the root directory to ./resources/views (the place where the home.handlebars is located)
app.set('views', 
  path.resolve(__dirname, './resources/views'))

route(app)

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
)
