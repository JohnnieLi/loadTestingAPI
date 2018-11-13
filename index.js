const express = require('express')
const app = express()
const port = 3000
let loadTestingService = require('./loadTest.service')();

const PostOptions = {
	url: 'https://development.autobestinfo.com',
	concurrent: 5,
	method: 'POST',
	body:'',
	requestsPerSecond:5,
	maxSeconds:30,
	requestGenerator: (params, options, client, callback) => {
		const message = '{"hi": "ho"}';
		options.headers['Content-Length'] = message.length;
		options.headers['Content-Type'] = 'application/json';
		options.body = 'YourPostData';
		options.path = 'YourURLPath';
		const request = client(options, callback);
		request.write(message);
		return request;
	}
};

app.get('/', function(req, res){
	res.send({result:"teat"})
})

app.get('/test', async function(req, res){
	let allResults = [];
	try{

		function statusCallback(latency, result, error) {
			// console.log('Current latency %j, result %j, error %j', latency, result, error);
			// console.log('----');
			// console.log('Request elapsed milliseconds: ', result.requestElapsed);
			// console.log('Request index: ', result.requestIndex);
			// console.log('Request loadtest() instance index: ', result.instanceIndex);
		}

		const options = {
			url: 'http://localhost:3000',
			maxSeconds:10,
			concurrency: 1000
		};
		let first = await loadTestingService.start(options);
		allResults.push(first);



		// const options2 = {
		// 	url: 'https://development.autobestinfo.com',
		// 	maxSeconds:10,
		// 	concurrency: 500,
		// };
		// let second = await loadTestingService.start(options2);
		// allResults.push(second);



		// const options3 = {
		// 	url: 'https://development.autobestinfo.com',
		// 	maxSeconds:10,
		// 	concurrency: 1000,
		// };
		// let third = await loadTestingService.start(options3);
		// allResults.push(third);
		res.send({results:allResults})
	}catch(err){
		res.send({error:err})
	}
	  
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
