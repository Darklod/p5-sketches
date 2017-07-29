var express = require('express');
var engine = require('ejs-locals');
var bodyParser = require('body-parser');
var helpers = require('express-helpers')
var fs = require('fs');
var app = express();

helpers(app);

app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    fs.readdir('static/projects', (err, files) => {
        res.render('pages/index', { list: files || [] });
    })
})

app.get('/projects/:filename', (req, res) => {
    res.render('pages/project');
})

app.listen(process.env.PORT || 3000);
