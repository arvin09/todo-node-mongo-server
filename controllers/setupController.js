var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api', function(req, res){
        res.send("Hello");
    });

    app.get('/api/setupTodos', function(req, res){
        //seed database 
        var seedData = [
            {
                username: 'arvin',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'arvin',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'arvin',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(seedData, function(err, results){
            if(err){console.log(err);}
            res.send(results);
        })
    });
}