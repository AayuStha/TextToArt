const express = require('express');
const bodyParser = require('body-parser');
const figlet = require('figlet');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const port = process.env.PORT;


app.get('/', function (req, res) {
    res.render('index');
});

app.post('/', function (req, res) {
    let user = req.body.user;
    figlet(user, function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        const filename = Date.now() + '.txt';
        fs.writeFileSync(path.join(__dirname, 'public', filename), data);
        res.render('index', { user: data, output: data, filename: filename });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});