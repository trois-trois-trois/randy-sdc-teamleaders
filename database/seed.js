const config = require('../config');
const db = require('./index.js');
const faker = require('faker');

const getData = () => {
      return ({
        id: faker.random.number(),
      Offense: {
        Player: faker.name.findName(), Passing: faker.random.number(), Rushing: faker.random.number(), Receiving: faker.random.number(), Touchdowns: faker.random.number(),
      },
      Defense: {
        Player: faker.name.findName(), Tackles: faker.random.number(), Sacks: faker.random.number(), Interceptions: faker.random.number(), FumblesForced: faker.random.number(),
      },
      SpecialTeams: { Player: faker.name.findName(), FieldGoal: faker.random.number(), ExtraPoint: faker.random.number() },
    });
}

const data = getData()


const insertSampleBlogs = () => {
      db.Stats.insertMany(bulk)
      .then(() => db.disconnect());
};

insertSampleBlogs();
