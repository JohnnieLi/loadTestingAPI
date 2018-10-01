const loadtest = require('loadtest/lib/loadtest.js');

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

const options = {
    url: 'https://development.autobestinfo.com',
    maxRequests: 1000,
};

loadtest.loadTest(options, (error, results) => {
	if (error) {
		return console.error('Got an error: %s', error);
	}
	console.log(results);
	console.log('Tests run successfully');
});