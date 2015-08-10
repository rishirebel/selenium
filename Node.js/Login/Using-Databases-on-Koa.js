/* Code By Rishikesh Chandra 
Here we are using Koa.js for accessing different set types of databases like REDIS, MongoDB, and MySQL using Knex.js*/
//Here we are using ioredis package from https://www.npmjs.com/package/ioredis
var Redis = require('ioredis');
var redis = new Redis();
//Here we are using Koa.js from https://www.npmjs.com/package/koa 
var koa = require('koa');
//Here we are using MongoDB for database needs from https://www.npmjs.com/package/mongodb
var app = new koa();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/test';
//here we are using Knex.js from https://www.npmjs.com/package/knex
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host:'localhost',
    user:'root',
    password:'',
    database:'my_db'
  }
});
 
app.use( function* (next){
  redis.hmset('student','name1','RAM','class1','DOCT','name2','ROHIT','class2','ENGG');
  var some =  yield redis.hgetall('student'); 
  console.log(some);
  this.body = (some);
  yield next;
  console.log(some);
  console.log("****THIS COMES SIXTH AS PER CALLBACKS****");
  console.log("}");
 });

app.use(function * (next){
  redis.zadd('hackers',1,'fire');
  redis.zadd('hackers',2,'reflexes');
  redis.zadd('hackers',3,'gambet');
  redis.zadd('hackers',4,'dragon');
  var foo =  yield redis.zrange('hackers', 0,-1);
  console.log(foo);
  this.body = foo;
  yield next;
  console.log(foo);
  console.log("****THIS COMES FIFTH AS PER CALLBACKS****");
})
app.use(function * (next){
  redis.hset('metal','metal 1','Titanium');
  redis.hset('metal','metal 2','Platinum');
  redis.hset('metal','metal 3','Palladium');
  redis.hset('metal','metal 4','Uranium');
  var faa =  yield redis.hgetall('metal');
  console.log(faa);
  this.body = faa;
  yield next;
  console.log(faa);
  console.log("****THIS COMES FOURTH AS PER CALLBACKS****");
})
app.use(function * (next){
  redis.lpush('elements','Ti');
  redis.rpush('elements','Pl')
  var faz =  yield redis.lrange('elements',0,-1);
  console.log(faz);
  this.body = faz;
  yield next;
  console.log(faz);
  console.log("****THIS COMES THIRD AS PER CALLBACKS****");
  redis.lpop('elements');
  redis.lpop('elements');
  redis.lpop('elements');
  redis.lpop('elements');
})
app.use( function * (next){
  var rowy = yield knex.select('*').from('employee');
  console.log(rowy);
  this.body = rowy;
  yield next;
  console.log(rowy);
  console.log("****THIS COMES SECOND AS PER CALLBACKS****");
});

app.use(function *(next){
   yield next;
   MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    }
    else {
      console.log('Connection established to', url);
      var collection = db.collection('employee');
      //collection.update({id:3},{$set:{post:"Jr Manager"}});
      var cursor = collection.find();
      cursor.each(function (err, doc) {
        
        if (err) {
          console.log(err);
        }
        else {
          console.log(doc);
        }


      });
      console.log('****THIS COMES FIRST AS PER CALLBACKS****');
        console.log("}");
    }
  });

})  ;


app.listen(3001);
console.log('listening on port 3001');
