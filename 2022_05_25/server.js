const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const serveStatic = require('serve-static');
const session = require('express-session');
const formidable = require('formidable-serverless');
const sharp = require('sharp');

//Specify url path
var $path =  __dirname + '/uploads/'; // Physical path
var $urlpath = '/uploads/'; // URL path

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json({ limit: '50mb' }));
app.use($urlpath, serveStatic($path));

app.use(session({
    secret: 'Your_Secret_Key',
    resave: true,
    saveUninitialized: true,
    rolling: true, 
    cookie: {
        httpOnly: true,
        maxAge: 1*60*60*1000
    }
}))

app.post('/upload', (req, res) => {

    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {

        if (err) return res.status(500).json({ ok:true, status: 500, error: 'Something went wrong.' });

        let extension = path.extname(files.file.name).toLowerCase();
        if(extension  !== '.jpeg' && extension !== '.jpg' && extension !== '.png' && extension !== '.gif' && extension  !== '.webp' && extension  !== '.webm' && extension  !== '.mp4') {
            res.status(500).json({ ok:true, status: 500, error: 'File type not allowed.' });
            return;
        }
        
        const file = fs.readFileSync(files.file.path);

        let imageFile = file;
        if(extension  === '.jpeg' || extension === '.jpg') {
            imageFile = await sharp(files.file.path).resize(1600, 1600, {
                fit: sharp.fit.inside,
                withoutEnlargement: true, 
            })
            .jpeg({ quality: 80, progressive: true, force: false })
            .toBuffer();
        }

        fs.writeFile($path + files.file.name, imageFile, async (err)=>{
            if (err) {
                res.status(500).json({ ok:true, status: 500, error: 'Something went wrong.' });
                return 
            } 
            res.status(200).json({ ok:true, status: 200, url:  $urlpath + files.file.name});
        });

    });
     
});

app.post('/uploadbase64', async (req, res) => {
    const base64Data = req.body.image;
    const filename = req.body.filename;

    let extension = path.extname(filename).toLowerCase();

    let imageFile=base64Data;
    if(extension  === '.jpeg' || extension === '.jpg') {
        let img = new Buffer.from(base64Data, 'base64');
        imageFile = await sharp(img).resize(1600, 1600, {
            fit: sharp.fit.inside,
            withoutEnlargement: true, 
        })
        .jpeg({ quality: 70, progressive: true, force: false })
        .toBuffer();
    }

    fs.writeFile($path + filename, imageFile, 'base64', async (err)=>{
        if (err) {
            res.status(500).json({ ok:true, status: 500, error: 'Something went wrong.' });
            return 
        } 
        res.status(200).json({ ok:true, status: 200, url:  $urlpath + filename});
    });
});

// Save content into session (normally you will save the content into a database)
app.post('/save', (req, res) => {

    req.session.html = req.body.html;
    req.session.mainCss = req.body.mainCss;
    req.session.sectionCss = req.body.sectionCss;

    res.status(200).json({
        success: true,
        html: req.body.html,
        // body: req.body
    });
});

// Load content from session (normally you will load the content from a database)
app.get('/load', (req, res) => {
    res.status(200).json({
        html: req.session.html?req.session.html:'',
        mainCss: req.session.mainCss?req.session.mainCss:'',
        sectionCss: req.session.sectionCss?req.session.sectionCss:''
    });
});

app.get('/hello', (req, res) => {
    res.send('Hello');
});

app.listen(8081, function() {
    console.log('App running on port 8081');
});
