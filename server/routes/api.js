var express = require('express');
var router = express.Router();
var Game = require('../models/games.js');

router.get('/games', function(req, res, next) {
    Game.find(function(err, game){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(game);
        }
    });
});

router.get('/game/:id', function(req,res,next){
    Game.findById(req.params.id, function(err, game){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(game);
        }
    });
});

router.post('/games', function(req, res, next){
    newGame = new Game(req.body);
    newGame.save(function(err, game){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(game);
        }
    });
});

router.put('/game/:id',function(req, res, next){
    options = {'new':true};
    Game.findByIdAndUpdate(req.params.id, req.body, options, function(err, game){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(game);
        }
    });
});

router.delete('/game/:id', function(req, res, next){
    Game.findByIdAndRemove(req.params.id, function(err, game){
        if (err) {
            res.send({"message":err});
        }else{
            res.send({"message":"success"});
        }
    });
});

module.exports = router;
