const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const dal = require('./dal');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const routes = require('./routes/routes');

//set up mustache
app.engine('mustache', mustache-express())
app.set('view-engine', 'mustache')
app.set('views', __dirname + '/views')

//set up express-static
app.use(express.static('public'))

//set up body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//set up routes
app.use('/', routes)

//set up ports
app.set('port', 3000)

//set up listening and console log
app.listen(app.get('port'), function() {
  console.log('App has started on port 3000')
})
