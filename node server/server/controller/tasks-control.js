const Task = require('../database/model/task-schema')



module.exports.listar = (req, res) => {
    Task.find({userId: req.params._id},(error, taskList)=>{
        res.json(taskList)
    })
};

module.exports.listarTodos = (req, res) => {
    Task.find({},(error, taskList)=>{
        res.json(taskList)
    })
};


module.exports.save = (req, res) => {
    let task = new Task();
    task.userId = req.body.userId;
    task.title = req.body.title;
    task.description = req.body.description;
    task.finished = req.body.finished;

    task.save((err)=>{
        if(err){
            res.send('erro ao salvar')
        }
        res.json(task)
    })
};

module.exports.update = (req, res) => {
    var query = { userId:req.body.userId, description: req.body.description}
    , options = { multi: true };
    Task.updateOne(query, req.body, options, (err)=> {
        if (err) return res.send(500, { error: err });
        res.json({sucess: true})
    });
};

module.exports.delete = (req, res) => {
    Task.remove({_id: req.params._id }, (err)=> {
        if (err) return res.send(500, { error: err });
        res.json({sucess: true})
    });
};
