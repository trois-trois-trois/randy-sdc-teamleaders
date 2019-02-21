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
            for (let i = 0; i < 250000; i++) {
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
        for (let i = 250000; i < 500000; i++) {
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
        for (let i = 500000; i < 750000; i++) {
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
        for (let i = 750000; i < 1000000; i++) {
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
        for (let i = 1000000; i < 1250000; i++) {
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
        for (let i = 1250000; i < 1500000; i++) {
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
        for (let i = 1500000; i < 1750000; i++) {
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
        for (let i = 1750000; i < 2000000; i++) {
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
        for (let i = 2000000; i < 2250000; i++) {
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
        for (let i = 2250000; i < 2500000; i++) {
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
        for (let i = 2500000; i < 2750000; i++) {
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
        for (let i = 2750000; i < 3000000; i++) {
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
        for (let i = 3000000; i < 3250000; i++) {
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
        for (let i = 3250000; i < 3500000; i++) {
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
        for (let i = 3500000; i < 3750000; i++) {
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
        for (let i = 3750000; i < 4000000; i++) {
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
        for (let i = 4000000; i < 4250000; i++) {
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
        for (let i = 4250000; i < 4500000; i++) {
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
        for (let i = 4500000; i < 4750000; i++) {
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
        for (let i = 4750000; i < 5000000; i++) {
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
        for (let i = 5000000; i < 5250000; i++) {
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
        for (let i = 5250000; i < 5500000; i++) {
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
        for (let i = 5500000; i < 5750000; i++) {
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
        for (let i = 5750000; i < 6000000; i++) {
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
        for (let i = 6000000; i < 6250000; i++) {
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
        for (let i = 6250000; i < 6500000; i++) {
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
        for (let i = 6500000; i < 6750000; i++) {
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
        for (let i = 6750000; i < 7000000; i++) {
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
        for (let i = 7000000; i < 7250000; i++) {
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
        for (let i = 7250000; i < 7500000; i++) {
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
        for (let i = 7500000; i < 7750000; i++) {
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
        for (let i = 7750000; i < 8000000; i++) {
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
        for (let i = 8000000; i < 8250000; i++) {
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
        for (let i = 8250000; i < 8500000; i++) {
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
        for (let i = 8500000; i < 8750000; i++) {
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
        for (let i = 8750000; i < 9000000; i++) {
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
        for (let i = 9000000; i < 9250000; i++) {
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
        for (let i = 9250000; i < 9500000; i++) {
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
        for (let i = 9500000; i < 9750000; i++) {
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
        for (let i = 9750000; i < 10000000; i++) {
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
}