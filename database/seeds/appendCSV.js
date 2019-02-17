
const faker = require('faker');
const fs = require('fs');
const uuid = require('uuid/v4');
const data = [];

const getRandomInt = num => Math.floor(Math.random() * Math.floor(num));

const getRandomPosition = () => {
    const position = ['Offense', 'Defense', 'Special Teams'];
    return  `${position[getRandomInt(position.length)]}`;
}

for (let i = 0; i < 1000000; i++) {
    const fakeData = `${uuid()}, ${getRandomPosition()}, ${faker.name.findName()}, ${faker.random.number(100)}, ${faker.random.number(100)}, ${faker.random.number(100)}, ${faker.random.number(100)}, ${faker.random.number(100)}, ${faker.random.number(100)}, ${faker.random.number(100)}, ${faker.random.number(100)}, ${faker.random.number(100)}, ${faker.random.number(100)}`
    data.push([fakeData]);
}

let string = '';

data.forEach((row) => {
    string = string + row.join(',') + '\n';
})

fs.appendFile('/users/rlthomasmaster/github/seedscript.csv', string, (err) => {
    if (err) console.log('Error: ', err);
    else {
        console.log('Data generated and appended');
    }
})
fs.appendFile('/users/rlthomasmaster/github/seedscript.csv', string, (err) => {
    if (err) console.log('Error: ', err);
    else {
        console.log('Data generated and appended');
    }
})
fs.appendFile('/users/rlthomasmaster/github/seedscript.csv', string, (err) => {
    if (err) console.log('Error: ', err);
    else {
        console.log('Data generated and appended');
    }
})
fs.appendFile('/users/rlthomasmaster/github/seedscript.csv', string, (err) => {
    if (err) console.log('Error: ', err);
    else {
        console.log('Data generated and appended');
    }
})
fs.appendFile('/users/rlthomasmaster/github/seedscript.csv', string, (err) => {
    if (err) console.log('Error: ', err);
    else {
        console.log('Data generated and appended');
    }
})
fs.appendFile('/users/rlthomasmaster/github/seedscript.csv', string, (err) => {
    if (err) console.log('Error: ', err);
    else {
        console.log('Data generated and appended');
    }
})
fs.appendFile('/users/rlthomasmaster/github/seedscript.csv', string, (err) => {
    if (err) console.log('Error: ', err);
    else {
        console.log('Data generated and appended');
    }
})
fs.appendFile('/users/rlthomasmaster/github/seedscript.csv', string, (err) => {
    if (err) console.log('Error: ', err);
    else {
        console.log('Data generated and appended');
    }
})
fs.appendFile('/users/rlthomasmaster/github/seedscript.csv', string, (err) => {
    if (err) console.log('Error: ', err);
    else {
        console.log('Data generated and appended');
    }
})
fs.appendFile('/users/rlthomasmaster/github/seedscript.csv', string, (err) => {
    if (err) console.log('Error: ', err);
    else {
        console.log('Data generated and appended');
    }
})