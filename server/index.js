const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const cassandra = require('cassandra-driver');

const app = express();
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'espn' });
client.connect(function(err, result){
  console.log('index: cassandra connected');
});

const getAllData = ('SELECT * FROM espn.stats');

// app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/stats', (req, res) => {
  client.execute(getAllData, [], (err, result) => {
    console.log(result, 'result')
    if(err) {
      res.sendStatus(404);
    } else {
      console.log(result);
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});