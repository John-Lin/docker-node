var express = require('express');
var low = require('lowdb');
var bodyParser = require('body-parser');
var app = express();

var db = low('db.json');

app.use(bodyParser.json());

app.get('/api/get/:id([0-9a-zA-Z]{64})', function(req, res) {
  var flow = db('flowtable').find({id: req.params.id});
  if (!flow) {
    return res.sendStatus(204);
  } else {
    res.send(flow);
  }

  // res.json(flow);
  // res.json({result: 'ok'});
});

app.post('/api/save/:id([0-9a-zA-Z]{64})', function(req, res) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.sendStatus(400);
  }

  var flow = db('flowtable').find({id: req.params.id});

  if (req.body.id !== req.params.id) {
    console.log('[x] Bad ID');
    return res.sendStatus(400);

    // res.json({result: 'failed', reason: 'The URL ID is not equal to post body ID.'});
  }

  if (flow) {
    console.log('[*] Remove and update');
    db('flowtable').remove(flow);
  }

  db('flowtable').push(req.body);
  res.send({result: 'ok'});

  // res.json({result: 'ok'});

});

var server = app.listen(2000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('[*] JSON-Server listening at http://%s:%s', host, port);
});
