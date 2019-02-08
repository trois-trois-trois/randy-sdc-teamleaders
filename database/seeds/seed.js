// const db = require('../models/stats.sql');
const statsDB = require('../models/stats.sql');

const stats  = [{
    id: 1,
    name: 'Randy Thomas',
    team: 'Los Angeles Rams',
}];

const insertStats = function() {
    statsDB.create(stats)
    .then(() => db.disconnect());
};

insertStats();