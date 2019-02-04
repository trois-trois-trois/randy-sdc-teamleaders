const config = require('../config');
const db = require('./index.js');
const faker = require('faker');


async function insertSampleBlogs(inner, outer) {
  for (let i = 0; i < outer; i++ ) {
    let arr = [];
    for (let j = 0; j < inner; j++) {
      let obj = {
              id: faker.random.number(),
            Offense: {
              Player: faker.name.findName(), Passing: faker.random.number(), Rushing: faker.random.number(), Receiving: faker.random.number(), Touchdowns: faker.random.number(),
            },
            Defense: {
              Player: faker.name.findName(), Tackles: faker.random.number(), Sacks: faker.random.number(), Interceptions: faker.random.number(), FumblesForced: faker.random.number(),
            },
            SpecialTeams: { Player: faker.name.findName(), FieldGoal: faker.random.number(), ExtraPoint: faker.random.number() },
            }
            arr.push(obj);
          }
          console.log('saving instance', i)
          await db.Stats.insertMany(arr);
    }
}
  
insertSampleBlogs(1000, 1000);
