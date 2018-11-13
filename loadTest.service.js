
const loadtest = require('loadtest/lib/loadtest.js');


module.exports = function(){

    let loadTesting = {};

    loadTesting.start = function(options){
        return new Promise(function(resolve, reject){
            loadtest.loadTest(options, (error, results) => {
                if (error) {
                    console.log(error);
                    reject(error);
                }
                if(results){
                    resolve(results);
                }
            });
        });
    }

    return loadTesting;

}