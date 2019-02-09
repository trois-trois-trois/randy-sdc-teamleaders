const db = require('../config');
const dbs = require('../models/stats');

const stats  = {
    id: '1',
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
};

const stats2 = ('87801u8u381','offense','marcus peters','50','20','50','10','78','72','12','31','31','100');

const insertStats = function() {
    db.execute(
        `INSERT INTO stats ( id,position,player,fieldGoal,extraPoint,tackles,sacks,interceptions,fumblesForced,passing,rushing,receiving,touchdowns) 
         VALUES( c37d661d-7e61-49ea-96a5-68c34e83db3a,'Offense','Marcus Peters','50','20','50','10','78','72','12','31','31','100')` 

        )
};

insertStats();