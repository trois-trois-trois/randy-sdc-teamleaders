const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cassandra = require('cassandra-driver');
const client = require('../database/config');

const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const getAllData = ('SELECT * FROM espn.stats');

app.get('/stats', (req, res) => {
  client.execute(getAllData, [], (err, result) => {
    console.log(result, 'result')
    if(err) {
      res.sendStatus(404).send('ERROR: ', err);
    } else {
      res.send(result);
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});