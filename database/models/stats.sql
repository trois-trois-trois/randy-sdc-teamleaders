const db = require('../config.js');


DROP KEYSPACE IF EXISTS espn;

CREATE KEYSPACE espn WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor':1};

USE espn;

CREATE TABLE stats (
  id  INT PRIMARY KEY,
  name TEXT,
  team TEXT,
  PRIMARY KEY(id),
);
