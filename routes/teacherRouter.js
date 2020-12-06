const express = require('express');
const teacherRouter = express.Router();
const Teachers = require('../models/teachers');

/* GET users listing. */
// router.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200); });

teacherRouter.route('/')
 .get((req, res, next) => {
  Teachers.find()
    .then(user => {
      res.status(200).json(user);
    }, err => next(err))
    .catch(err => next(err))
})
  .post((req, res, next) => {
    Teachers.create(req.body)
      .then(student => {
        res.status(200).json(student);
      }, err => next(err))
      .catch(err => next(err));
  })


teacherRouter.route('/:teacherId')
  .get((req, res, next) => {
    Teachers.findById(req.params.teacherId)
      .then(teacher => {
        if(teacher){
          res.status(200).json(teacher);
        } else {
          let err = new Error('Not found');
          err.status = 404;
          return next(err);
        }
      }, err => next(err))
      .catch(err => next(err))
  });


module.exports = teacherRouter;