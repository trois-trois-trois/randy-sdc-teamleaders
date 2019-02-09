const db = require('../config.js');


'DROP KEYSPACE [IF EXISTS] espn';

'CREATE KEYSPACE espn WITH REPLICATION = { class: SimpleStrategy, replication_factor:1}';

'USE espn';

'CREATE TABLE stats ('
  'id  INT PRIMARY KEY,'
  'position TEXT,'
  'player TEXT,'
  'fieldGoal TEXT,'
  'extraPoint TEXT,'
  'tackles TEXT,'
  'sacks TEXT,'
  'interceptions TEXT,'
  'fumblesForced TEXT,'
  'passing TEXT,'
  'rushing TEXT,'
  'receiving TEXT,'
  'touchdowns TEXT,'
  'PRIMARY KEY(id),'
');'
