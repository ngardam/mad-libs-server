const { application } = require('express');
const Express = require('express');
let App = Express();

const mainRoutes = require('./controllers/mainRoutes')
let staticServer = Express.static(__dirname + "public")

const PORT = 4000;

App.use(Express.urlencoded({extended: true}))
App.set('view engine', 'jade');
App.use(Express.json())
App.use(staticServer)
App.use(mainRoutes)

App.listen(PORT, () => {
    console.log(`server listens on ${PORT}`)
})

