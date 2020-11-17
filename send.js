'use strict';

const open = require('amqplib').connect('amqp://localhost');

const queue = 'hello';

// Publisher
open.then(conn => {
	return conn.createChannel();
})
	.then(ch => {
		return ch.assertQueue(queue).then(ok => {
			return ch.sendToQueue(queue, Buffer.from('hello world 3'));
		});
	})
	.then((res) => {
		console.log('Message sent')
	})
	.catch(console.warn);
