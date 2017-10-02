var express = require('express');
var engine = require('ejs-locals');
var bodyParser = require('body-parser');
var helpers = require('express-helpers');
var cookieParser = require('cookie-parser');
var compression = require('compression');
var md5 = require('md5');
var fs = require('fs');
var app = express();

helpers(app);

app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

var auth = (req, res, next) => {
    if (req.params.dir) {
        if (req.cookies.secret == "ok")
            next();
        else 
            res.render('pages/secret');
    } else {
        res.cookie('secret', null);
        next();
    }
}

app.get('/:dir?', auth , (req, res) => {
    var path = 'static/projects';
    if (req.params) {
        if (req.params.dir) {
            path += '/' + req.params.dir;
        }
    }

    var files = fs.readdirSync(path);
    files = files.filter((f) => {
        return fs.statSync(path + '/' + f).isDirectory();
    })
    res.render('pages/index', { list: files || [], path: path.replace('static/', '') });
})

app.get('/projects/:filename', (req, res) => {
    if (req.params.filename == "Speciali") {
        return res.redirect('/Speciali')
    }
    res.render('pages/project');
})

app.post('/secret', (req, res) => {
    console.log(req.body);
    if (req.body.secret && md5(req.body.secret) === "c51ce410c124a10e0db5e4b97fc2af39") {
        res.cookie('secret', 'ok');
        res.redirect('/Speciali')
    } else {
        res.render('pages/secret', { error: "wrong key"});
    }
})

app.listen(process.env.PORT || 3000);
