<h1>CRUD QUERIES</h1>
<br>
<br>
<br>

<h2>CREATE</h2> <br />
<h4>ROUTE: /stats</h4> <br />
<br />
<p>
```app.post('/stats', (req, res) => {
  const { id, position, player, image, passing, rushing, receiving, touchdowns, tackles, sacks, interceptions, fumblesForced, fieldGoal, extraPoint } = req.body 
  let body = {
    id: 12,
    position: 'Offense',
    player: 'Randy Thomas',
    image: 'http://lorempixel.com/200/200',
    passing: '80',
    rushing: '60',
    receiving: '40',
    touchdowns: '3',
    tackles: '5',
    sacks: '0',
    interceptions: '0',
    fumblesforced: '0',
    fieldgoal: '0',
    extrapoint: '2',
  };

  db.knex('stats').insert(body)
  .then(() => res.status(200).send('Data successfully saved to DB'))
});```
</p>
<br>
<br>

<h1>READ</h1> <br>
<h4>ROUTE: /stats</h4> <br>
<br>
<p>
```app.get('/stats', (req, res) => {
  Stats.reset()
    .orderBy('id', 'DESC')
    .query((qb) => {
      qb.limit(20);
    })
    .fetch()
    .then((data) => {
      res.status(200).send(data.models);
    });
});```
</p>
<br>
<br>

<h1>UPDATE</h1> <br>
<h4>ROUTE: /stats</h4> <br>
<br>
<p>
```app.put('/stats', (req, res) => {
  db.knex('stats')
  .where({
    player: 'Randy Thomas'
  })
  .update({
    position: 'Special Teams'
  })
  .then(() => res.status(200).send('DB has been updated!'))
})```
</p>
<br>
<br>

<h1>DELETE</h1> <br>
<h4>ROUTE: /stats</h4> <br>
<br>
<p>
```app.delete('/stats', (req, res) => {
  db.knex('stats')
  .where({
    player: 'Randy Thomas'
  })
  .del()
  .then(() => res.status(200).send('Data deleted from DB!'))
})```
</p>
<br>
<br>




<i>see more: http://www.github.com/rlthomascc</i>