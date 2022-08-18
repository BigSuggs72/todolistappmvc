const TodoTask = require('../models/todotask')

module.exports = {
        getEdit: (request, response) => {
            const id = request.params.id
            TodoTask.find({}, (err, task) => {
                response.render('edit.ejs', {
                todoTasks: task, idTask: id })
        });
    },
        deleteTask:  (request, response) => {
            const id = request.params.id
            TodoTask.findByIdAndRemove(id, err => {
                if (err) return response.status(500).send(err) 
                response.redirect('/');
            })
        },
        updateTask: (request, response) => {
            const id = request.params.id
            TodoTask.findByIdAndUpdate(
                id, 
                {
                    title: request.body.title,
                    content: request.body.content
                },
                err => {
                    if (err) return response.status(500).send(err) 
                    response.redirect('/')
                }
            )
        }
}