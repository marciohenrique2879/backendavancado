const express = require('express');
const router = express.Router();
const taskControl = require('../controller/tasks-control')


router.route('/tasks')
    .post((req,res) => taskControl.save(req,res))
    .get((req,res) => taskControl.listarTodos(req,res))

router.route('/tasks/:_id')
    .get((req,res) => taskControl.listar(req,res))
    .delete((req,res) => taskControl.delete(req,res))

module.exports = router;