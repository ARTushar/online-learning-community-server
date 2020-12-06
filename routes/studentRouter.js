const express = require('express');
const studentRouter = express.Router();
const Students = require('../models/students');

/* GET users listing. */
// router.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200); });

studentRouter.route('/')
 .get((req, res, next) => {
  Students.find()
    .then(user => {
      res.status(200).json(user);
    }, err => next(err))
    .catch(err => next(err))
})
  .post((req, res, next) => {
    Students.create(req.body)
      .then(student => {
        res.status(200).json(student);
      }, err => next(err))
      .catch(err => next(err));
  })

studentRouter.route('/:studentId')
  .get((req, res, next) => {
    Students.findById(req.params.studentId)
      .then(student => {
        if(student){
          res.status(200).json(student);
        } else {
          let err = new Error('Not found');
          err.status = 404;
          return next(err);
        }
      }, err => next(err))
      .catch(err => next(err))
  })

module.exports = studentRouter;