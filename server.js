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
    var path = 'static/projects';
    if (req.query) {
        if (req.query.dir) {
            path += '/' + req.query.dir
        }
    }
    fs.readdir(path, (err, files) => {
        res.render('pages/index', { list: files || [], path: path });
    })
})

app.get('/projects/:filename', (req, res) => {
    if (req.params.filename == "Speciali") {
        return res.redirect('/?dir=Speciali')
    }
    res.render('pages/project');
})

app.listen(process.env.PORT || 3000);
