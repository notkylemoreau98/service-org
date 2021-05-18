const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51ISAxtHJNiQVOCCAQGewWbrPh4EKZARFvYip1UgElLpDi5JNCssni7sAp6QxL7bL7pwgwTc85V9qAoH0EljEMmQm00SwK9mOmq');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Partners in Health'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payment Request Received', total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd'
	});

	// 201 signals that something has been created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret
	});

});

exports.api = functions.https.onRequest(app);