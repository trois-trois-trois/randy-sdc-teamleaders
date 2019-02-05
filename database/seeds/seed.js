const faker = require('faker');

const getRandomInt = num => Math.floor(Math.random() * Math.floor(num));

const getRandomPosition = () => {
    const position = ['Offense', 'Defense', 'Special Teams'];
    return  `${position[getRandomInt(position.length)]}`;
}

const genImage = () => {
    return `${faker.image.people(80, 80)}?random=${Date.now()}`
}

exports.seed = async function getData(knex, Promise) {
    return knex('stats').del()
    .then(function() {
            const arr = [];
            for (let i = 0; i < 1000000; i++) {
                const obj = {
                    id: i,
                    position: getRandomPosition(),
                    player: faker.name.findName(),
                    image: genImage(),
                    passing: faker.random.number(100),
                    rushing: faker.random.number(100),
                    receiving: faker.random.number(100),
                    touchdowns: faker.random.number(100),
                    tackles: faker.random.number(100),
                    sacks: faker.random.number(100),
                    interceptions: faker.random.number(100),
                    fumblesForced: faker.random.number(100),
                    fieldGoal: faker.random.number(100),
                    extraPoint: faker.random.number(100),
                }
                console.log('Saving Instance: ', i);
                arr.push(obj);
            };
            return knex.batchInsert('stats', arr)
    })
    .then(function() {
        const arr = [];
        for (let i = 1000000; i < 2000000; i++) {
            const obj = {
                id: i,
                position: getRandomPosition(),
                player: faker.name.findName(),
                image: genImage(),
                passing: faker.random.number(100),
                rushing: faker.random.number(100),
                receiving: faker.random.number(100),
                touchdowns: faker.random.number(100),
                tackles: faker.random.number(100),
                sacks: faker.random.number(100),
                interceptions: faker.random.number(100),
                fumblesForced: faker.random.number(100),
                fieldGoal: faker.random.number(100),
                extraPoint: faker.random.number(100),
            }
            console.log('Saving Instance: ', i);
            arr.push(obj);
        };
        return knex.batchInsert('stats', arr)
    })
    .then(function() {
        const arr = [];
        for (let i = 2000000; i < 3000000; i++) {
            const obj = {
                id: i,
                position: getRandomPosition(),
                player: faker.name.findName(),
                image: genImage(),
                passing: faker.random.number(100),
                rushing: faker.random.number(100),
                receiving: faker.random.number(100),
                touchdowns: faker.random.number(100),
                tackles: faker.random.number(100),
                sacks: faker.random.number(100),
                interceptions: faker.random.number(100),
                fumblesForced: faker.random.number(100),
                fieldGoal: faker.random.number(100),
                extraPoint: faker.random.number(100),
            }
            console.log('Saving Instance: ', i);
            arr.push(obj);
        };
        return knex.batchInsert('stats', arr)
    })
    .then(function() {
        const arr = [];
        for (let i = 3000000; i < 4000000; i++) {
            const obj = {
                id: i,
                position: getRandomPosition(),
                player: faker.name.findName(),
                image: genImage(),
                passing: faker.random.number(100),
                rushing: faker.random.number(100),
                receiving: faker.random.number(100),
                touchdowns: faker.random.number(100),
                tackles: faker.random.number(100),
                sacks: faker.random.number(100),
                interceptions: faker.random.number(100),
                fumblesForced: faker.random.number(100),
                fieldGoal: faker.random.number(100),
                extraPoint: faker.random.number(100),
            }
            console.log('Saving Instance: ', i);
            arr.push(obj);
        };
        return knex.batchInsert('stats', arr)
    })
    .then(function() {
        const arr = [];
        for (let i = 4000000; i < 5000000; i++) {
            const obj = {
                id: i,
                position: getRandomPosition(),
                player: faker.name.findName(),
                image: genImage(),
                passing: faker.random.number(100),
                rushing: faker.random.number(100),
                receiving: faker.random.number(100),
                touchdowns: faker.random.number(100),
                tackles: faker.random.number(100),
                sacks: faker.random.number(100),
                interceptions: faker.random.number(100),
                fumblesForced: faker.random.number(100),
                fieldGoal: faker.random.number(100),
                extraPoint: faker.random.number(100),
            }
            console.log('Saving Instance: ', i);
            arr.push(obj);
        };
        return knex.batchInsert('stats', arr)
    })
    .then(function() {
        const arr = [];
        for (let i = 5000000; i < 6000000; i++) {
            const obj = {
                id: i,
                position: getRandomPosition(),
                player: faker.name.findName(),
                image: genImage(),
                passing: faker.random.number(100),
                rushing: faker.random.number(100),
                receiving: faker.random.number(100),
                touchdowns: faker.random.number(100),
                tackles: faker.random.number(100),
                sacks: faker.random.number(100),
                interceptions: faker.random.number(100),
                fumblesForced: faker.random.number(100),
                fieldGoal: faker.random.number(100),
                extraPoint: faker.random.number(100),
            }
            console.log('Saving Instance: ', i);
            arr.push(obj);
        };
        return knex.batchInsert('stats', arr)
    })
    .then(function() {
        const arr = [];
        for (let i = 6000000; i < 7000000; i++) {
            const obj = {
                id: i,
                position: getRandomPosition(),
                player: faker.name.findName(),
                image: genImage(),
                passing: faker.random.number(100),
                rushing: faker.random.number(100),
                receiving: faker.random.number(100),
                touchdowns: faker.random.number(100),
                tackles: faker.random.number(100),
                sacks: faker.random.number(100),
                interceptions: faker.random.number(100),
                fumblesForced: faker.random.number(100),
                fieldGoal: faker.random.number(100),
                extraPoint: faker.random.number(100),
            }
            console.log('Saving Instance: ', i);
            arr.push(obj);
        };
        return knex.batchInsert('stats', arr)
    })
    .then(function() {
        const arr = [];
        for (let i = 7000000; i < 8000000; i++) {
            const obj = {
                id: i,
                position: getRandomPosition(),
                player: faker.name.findName(),
                image: genImage(),
                passing: faker.random.number(100),
                rushing: faker.random.number(100),
                receiving: faker.random.number(100),
                touchdowns: faker.random.number(100),
                tackles: faker.random.number(100),
                sacks: faker.random.number(100),
                interceptions: faker.random.number(100),
                fumblesForced: faker.random.number(100),
                fieldGoal: faker.random.number(100),
                extraPoint: faker.random.number(100),
            }
            console.log('Saving Instance: ', i);
            arr.push(obj);
        };
        return knex.batchInsert('stats', arr)
    })
    .then(function() {
        const arr = [];
        for (let i = 8000000; i < 9000000; i++) {
            const obj = {
                id: i,
                position: getRandomPosition(),
                player: faker.name.findName(),
                image: genImage(),
                passing: faker.random.number(100),
                rushing: faker.random.number(100),
                receiving: faker.random.number(100),
                touchdowns: faker.random.number(100),
                tackles: faker.random.number(100),
                sacks: faker.random.number(100),
                interceptions: faker.random.number(100),
                fumblesForced: faker.random.number(100),
                fieldGoal: faker.random.number(100),
                extraPoint: faker.random.number(100),
            }
            console.log('Saving Instance: ', i);
            arr.push(obj);
        };
        return knex.batchInsert('stats', arr)
    })
    .then(function() {
        const arr = [];
        for (let i = 9000000; i < 10000000; i++) {
            const obj = {
                id: i,
                position: getRandomPosition(),
                player: faker.name.findName(),
                image: genImage(),
                passing: faker.random.number(100),
                rushing: faker.random.number(100),
                receiving: faker.random.number(100),
                touchdowns: faker.random.number(100),
                tackles: faker.random.number(100),
                sacks: faker.random.number(100),
                interceptions: faker.random.number(100),
                fumblesForced: faker.random.number(100),
                fieldGoal: faker.random.number(100),
                extraPoint: faker.random.number(100),
            }
            console.log('Saving Instance: ', i);
            arr.push(obj);
        };
        return knex.batchInsert('stats', arr)
    });
    
}