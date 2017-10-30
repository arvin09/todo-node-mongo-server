var config = require('./config');

module.exports = {
    getConnectionString: function () {
        // update this url with your mongo db details... 
        return 'mongodb://' + config.username + ':' + config.password + '@ds239965.mlab.com:39965/todo-list'
    }
}