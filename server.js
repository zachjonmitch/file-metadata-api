var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var path = require('path');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/upload', upload.single('file'), function(req, res) {
    return res.json(req.file);
});

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});