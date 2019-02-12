const db = require('../config');

const copy = "COPY espn.stats FROM 'users/rlthomasmaster/seedscript.csv' WITH DELIMITER='|' AND HEADER=TRUE"

db.execute(copy, [], (err, res) => {
    if (err) console.log('ERROR: ', err);
    else {
      console.log('ESPN stats data Copied :)');
    }
  });

