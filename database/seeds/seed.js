const db = require('../config');
const dbs = require('../models/stats');

// 'USE stats';


// 'INSERT INTO stats (id, position, player, fieldGoal, extraPoint, tackles, sacks, interceptions, fumblesForced, passing, rushing, receiving, touchdowns)'
//    'VALUES'
//         '('
//             '1',
//             'Offense',
//             'Marcus Peters',
//             '50',
//             '20',
//             '50',
//             '10',
//             '78',
//             '72',
//             '12',
//             '31',
//             '31',
//             '100',
//         ')

const stats  = [{
    id: 1,
    position: 'Offense',
    player: 'Marcus Peters',
    fieldGoal: '50',
    extraPoint: '20',
    tackles: '50',
    sacks: '10',
    interceptions: '78',
    fumblesForced: '72',
    passing: '12',
    rushing: '31',
    receiving: '31',
    touchdowns: '100',
}];

const insertStats = function() {
    db.insert(stats)
    .then(() => db.disconnect());
};

insertStats();