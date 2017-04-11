const express = require('express');
const router = express.Router();
const Rsvp = require('../models/rsvp.model');

router.get('/rsvps', function(req, res){
  Rsvp.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err  //do not actually send full error back in production, not secure
      });
    } else {
      res.status(200).json({
        rsvps: documents
      });
    }
  });
});

router.put('/rsvps/:id', function (req, res){
  Rsvp.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Succsesfully updated'
      });
    }
  });
})

module.exports = router;
