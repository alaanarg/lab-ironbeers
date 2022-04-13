const express = require('express');
const res = require('express/lib/response');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get("/", function (req, res) {
  res.render("index", { title: "Iron Beers!" });
});

app.get("/beers", function (req, res) {
  punkAPI
    .getBeers()
    .then(function (beersFromApi => res.render('beers', {beersFromApi: beersFromApi}))
    .catch(error => console.log(error));
});

app.get("/random-beer", function (req, res) {
  punkAPI
    .getBeers()
    .then(beersFromApi => res.render('random-beer', {beersFromApi: beersFromApi}))
    .catch(error => console.log(error));
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));