const db = require('../config.js');
const Stats = require('../models/stats.js');

const Stat = new db.Collection();

Stats.model = Stat;

module.exports = Stats;