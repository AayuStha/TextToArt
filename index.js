const express = require('express');
const bodyParser = require('body-parser');
const figlet = require('figlet');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
const port = 3000;

app.post('/', function (req, res) {
    let user = req.body.user;
    figlet(user, function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        res.render('index', { user: data, output: data });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });