// Luodaan express-sovellus
const express = require('express');
const app = express();

// Staattisten tiedostojen hakemisto
app.use(express.static('public'));

// Reitittämisen määrittäminen: etusivu
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Reitittämisen määrittäminen: yritysesittelysivu
app.get('/yritys', function (req, res) {
    res.sendFile(__dirname + '/public/yritys.html');
});

// Reitittämisen määrittäminen: yhteystiedot sivu
app.get('/yhteystiedot', function (req, res) {
    res.sendFile(__dirname + '/public/yhteystiedot.html');
});

// Reitittämisen määrittäminen: henkilökuntasivu
app.get('/henkilokunta', function (req, res) {
    res.sendFile(__dirname + '/public/henkilokunta.html');
});

// Kuunnellaan porttia 3000
app.listen(3000, function () {
    console.log('Sivusto on käynnissä osoitteessa http://localhost:3000');
});