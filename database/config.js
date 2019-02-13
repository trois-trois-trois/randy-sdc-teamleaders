const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'me',
      password: '',
      database: 'espn',
    },
  });
  
  const db = require('bookshelf')(knex);
  
  db.knex.schema.hasTable('feeds').then((exists) => {
    if (!exists) {
      return db.knex.schema.createTable('feeds', (t) => {
        t.increments('id').primary();
        t.string('position');
        t.string('player')
        t.string('image')
        t.string('passing');
        t.string('rushing');
        t.string('receiving');
        t.string('touchdowns');
        t.string('tackles');
        t.string('sacks');
        t.string('interceptions');
        t.string('fumblesForced');
        t.string('fieldGoal');
        t.string('extraPoint');
        t.timestamp('timestamp').defaultTo(knex.fn.now());
      })
        .then(t => console.log('Created Table:', t))
        .catch(err => console.log('Error creating Table', err));
    }
  });
  
  module.exports = db;