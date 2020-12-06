const express = require('express');
const requestRouter = express.Router();
const Requests = require('../models/requests');

requestRouter.route('/')
  .get((req, res, next) => {
    Requests.find()
      .then(requests => {
        res.status(200).json(requests);
      }, err => next(err))
      .catch(err => next(err));
  })
  .post((req, res, next) => {
    Requests.create(req.body)
      .then(request => {
        res.status(200).json(request)
      })
  })

requestRouter.route('/:requestId')
  .get((req, res, next) => {
    Requests.findById(req.params.requestId)
      .then(request => {
        if(request){
          res.status(200).json(request);
        } else {
           let err = new Error('Not found');
          err.status = 404;
          return next(err);
        }
      })
  })
  .put((req, res, next) => {
    Requests.findById(req.params.requestId)
      .then(request => {
        if(req.body.teachers) request.teachers = req.body.teachers;
        if(req.body.assignedTeacher) request.assignedTeacher = req.body.assignedTeacher;
        if(req.body.amount) request.amount = req.body.amount;
        request.save()
          .then(request => {
            res.status(200).json(request);
          }, err => next(err))
      }, err => next(err))
      .catch(err => next(err));
  })
  .delete((req, res, next) => {
    Requests.findByIdAndRemove(req.params.requestId)
      .then(resp => {
        res.status(200).json(resp);
      }, err => next(err))
      .catch(err => next(err));
  })


module.exports = requestRouter;