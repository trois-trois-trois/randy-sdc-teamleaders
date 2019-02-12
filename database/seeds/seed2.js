const fs = require('fs');

const data = 'id,position,player,fieldGoal,extraPoint,tackles,sacks,interceptions,fumblesForced,passing,rushing,receiving,touchdowns' + '\n';

fs.writeFile(`/users/rlthomasmaster/github/seedscript.csv`, data, (err) => {
    if (err) console.log('Error: ', err)
    else {
        console.log('Seedfile has been created');
    };
});