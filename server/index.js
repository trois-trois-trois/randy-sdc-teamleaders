// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const config = require('../config');
// const db = require('../database/index.js'); //old database //
// const dbs = require('../database/index2.js'); //old database//

// const app = express();

// app.use(cors());
// app.use(express.static(`${__dirname}/../client/dist`));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// app.get('/stats', (req, res) => {      //old database//   
//   db.Stats.find({}).limit(25).exec((err, data) => {    //old database//
//     res.send(data);    //old database//
//   });    //old database//
// });    //old database//

// app.get('/photos', (req, res) => {      //old database//
//   dbs.Photos.find({}).exec((err, data) => {    //old database//
//     res.send(data);    //old database//
//   });    //old database//
// });    //old database//

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

const express = require('express');
const cors = require('cors');
var Stats = require('../database/collections/stats.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../client/dist`));

app.post('/stats', (req, res) => {
  //CREATE
})

app.get('/stats', (req, res) => {
  //READ
  Stats.reset()
    .orderBy('id', 'DESC')
    .query((qb) => {
      qb.limit(20);
    })
    .fetch()
    .then((data) => {
      res.status(200).send(data.models);
    });
});


app.post('/stats', (req, res) => {
  //UPDATE
})

app.post('/stats', (req, res) => {
  //DELETE
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});