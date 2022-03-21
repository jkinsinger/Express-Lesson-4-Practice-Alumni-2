var express = require('express');
var router = express.Router();
const mysql = require ('mysql2');
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/actors', function(req, res, next){
  models.actor
    .findAll({
      where: {
        actor_id: {
          [Op.gt]: 55
        }
      }
  })
  .then(actorsFound => {
    res.render('actors', {
      actors: actorsFound
    });
  });
});


router.get('/specificActor', function(req, res, next){
  models.actor
    .findOne({
      where: {
        actor_id: 5
      }
  })
    .then(actor => {
      res.render('specificActor', {
       actor: actor
      });
  });
});

router.get('/actor/:id', function(req, res, next) {
  let actorId = parseInt(req.params.id);

  models.actor
    .findOne({
      where: {
        actor_id: actorId
      }
    })
      .then(actor => {
        res.render('specificActor', {
          actor: actor
        });
      });
});


module.exports = router;
