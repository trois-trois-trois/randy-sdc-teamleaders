const mongoose = require('mongoose');
const config = require('../config');

const option = {
  socketTimeoutMS: 100000000,
  keepAlive: true,
  reconnectTries: 100000000
};

mongoose.connect('mongodb://localhost/ESPN2/stats', option).then(function() {
  console.log('MongoDB has connected')
}, function(err) {
  console.log('MongoDB Failed To Connect')
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

const statsSchema = {
  Offense: {
    Player: String,
    Passing: Number,
    Rushing: Number,
    Receiving: Number,
    Touchdowns: Number,
  },
  Defense: {
    Player: String,
    Tackles: Number,
    Sacks: Number,
    Interceptions: Number,
    FumblesForced: Number,
  },
  SpecialTeams: {
    Player: String,
    FieldGoal: Number,
    ExtraPoint: Number,
  },
};

const Stats = mongoose.model('Stats', statsSchema);


const save = function () {
  console.log('hi im the save function');
};


const funcs = {
  db, Stats, save,
};
module.exports = funcs;

