const faker = require('faker');
const config = require('../../knexfile')

const getRandomInt = num => Math.floor(Math.random() * Math.floor(num));

const getRandomPosition = () => {
    const position = ['Offense', 'Defense', 'Special Teams'];
    return  `${position[getRandomInt(position.length)]}`;
}

const genImage = () => {
    return `${faker.image.people(80, 80)}?random=${Date.now()}`
}

exports.seed = async function getData(knex) {
    return knex('stats').del()
    .then(function() {
            const arr = [];
            for (let i = 0; i < 100000; i++) {
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
        for (let i = 100000; i < 200000; i++) {
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
        for (let i = 200000; i < 300000; i++) {
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
        for (let i = 300000; i < 400000; i++) {
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
        for (let i = 400000; i < 500000; i++) {
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
        for (let i = 500000; i < 600000; i++) {
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
        for (let i = 600000; i < 700000; i++) {
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
        for (let i = 700000; i < 800000; i++) {
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
        for (let i = 800000; i < 900000; i++) {
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
        for (let i = 900000; i < 1000000; i++) {
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
        for (let i = 1000000; i < 1100000; i++) {
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
        for (let i = 1100000; i < 1200000; i++) {
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
        for (let i = 1200000; i < 1300000; i++) {
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
        for (let i = 1300000; i < 1400000; i++) {
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
        for (let i = 1400000; i < 1500000; i++) {
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
        for (let i = 1500000; i < 1600000; i++) {
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
        for (let i = 1600000; i < 1700000; i++) {
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
        for (let i = 1700000; i < 1800000; i++) {
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
        for (let i = 1800000; i < 1900000; i++) {
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
        for (let i = 1900000; i < 2000000; i++) {
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
        for (let i = 2000000; i < 2100000; i++) {
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
        for (let i = 2100000; i < 2200000; i++) {
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
        for (let i = 2200000; i < 2300000; i++) {
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
        for (let i = 2300000; i < 2400000; i++) {
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
        for (let i = 2400000; i < 2500000; i++) {
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
        for (let i = 2500000; i < 2600000; i++) {
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
        for (let i = 2600000; i < 2700000; i++) {
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
        for (let i = 2700000; i < 2800000; i++) {
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
        for (let i = 2800000; i < 2900000; i++) {
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
        for (let i = 2900000; i < 3000000; i++) {
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
        for (let i = 3000000; i < 3100000; i++) {
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
        for (let i = 3100000; i < 3200000; i++) {
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
        for (let i = 3200000; i < 3300000; i++) {
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
        for (let i = 3300000; i < 3400000; i++) {
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
        for (let i = 3400000; i < 3500000; i++) {
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
        for (let i = 3500000; i < 3600000; i++) {
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
        for (let i = 3600000; i < 3700000; i++) {
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
        for (let i = 3700000; i < 3800000; i++) {
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
        for (let i = 3800000; i < 3900000; i++) {
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
        for (let i = 3900000; i < 4000000; i++) {
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
        for (let i = 4000000; i < 4100000; i++) {
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
        for (let i = 4100000; i < 4200000; i++) {
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
        for (let i = 4200000; i < 4300000; i++) {
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
        for (let i = 4300000; i < 4400000; i++) {
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
        for (let i = 4400000; i < 4500000; i++) {
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
        for (let i = 4500000; i < 4600000; i++) {
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
        for (let i = 4600000; i < 4700000; i++) {
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
        for (let i = 4700000; i < 4800000; i++) {
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
        for (let i = 4800000; i < 4900000; i++) {
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
        for (let i = 4900000; i < 5000000; i++) {
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
        for (let i = 5000000; i < 5100000; i++) {
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
        for (let i = 5100000; i < 5200000; i++) {
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
        for (let i = 5200000; i < 5300000; i++) {
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
        for (let i = 5300000; i < 5400000; i++) {
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
        for (let i = 5400000; i < 5500000; i++) {
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
        for (let i = 5500000; i < 5600000; i++) {
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
        for (let i = 5600000; i < 5700000; i++) {
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
        for (let i = 5700000; i < 5800000; i++) {
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
        for (let i = 5800000; i < 5900000; i++) {
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
        for (let i = 5900000; i < 6000000; i++) {
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
        for (let i = 6000000; i < 6100000; i++) {
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
        for (let i = 6100000; i < 6200000; i++) {
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
        for (let i = 6200000; i < 6300000; i++) {
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
        for (let i = 6300000; i < 6400000; i++) {
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
        for (let i = 6400000; i < 6500000; i++) {
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
        for (let i = 6500000; i < 6600000; i++) {
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
        for (let i = 6600000; i < 6700000; i++) {
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
        for (let i = 6700000; i < 6800000; i++) {
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
        for (let i = 6800000; i < 6900000; i++) {
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
        for (let i = 6900000; i < 7000000; i++) {
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
        for (let i = 7000000; i < 7100000; i++) {
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
        for (let i = 7100000; i < 7200000; i++) {
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
        for (let i = 7200000; i < 7300000; i++) {
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
        for (let i = 7300000; i < 7400000; i++) {
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
        for (let i = 7400000; i < 7500000; i++) {
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
        for (let i = 7500000; i < 7600000; i++) {
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
        for (let i = 7600000; i < 7700000; i++) {
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
        for (let i = 7700000; i < 7800000; i++) {
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
        for (let i = 7800000; i < 7900000; i++) {
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
        for (let i = 7900000; i < 8000000; i++) {
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
        for (let i = 8000000; i < 8100000; i++) {
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
        for (let i = 8100000; i < 8200000; i++) {
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
        for (let i = 8200000; i < 8300000; i++) {
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
        for (let i = 8300000; i < 8400000; i++) {
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
        for (let i = 8400000; i < 8500000; i++) {
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
        for (let i = 8500000; i < 8600000; i++) {
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
        for (let i = 8600000; i < 8700000; i++) {
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
        for (let i = 8700000; i < 8800000; i++) {
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
        for (let i = 8800000; i < 8900000; i++) {
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
        for (let i = 8900000; i < 9000000; i++) {
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
        for (let i = 9000000; i < 9100000; i++) {
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
        for (let i = 9100000; i < 9200000; i++) {
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
        for (let i = 9200000; i < 9300000; i++) {
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
        for (let i = 9300000; i < 9400000; i++) {
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
        for (let i = 9400000; i < 9500000; i++) {
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
        for (let i = 9500000; i < 9600000; i++) {
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
        for (let i = 9600000; i < 9700000; i++) {
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
        for (let i = 9700000; i < 9800000; i++) {
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
        for (let i = 9800000; i < 9900000; i++) {
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
        for (let i = 9900000; i < 10000000; i++) {
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