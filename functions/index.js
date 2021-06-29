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

// Cookie Warnings (Issue with the firebase functions)
// Upon doing research, I learned that there is nothing you can do until Google developers/admins (and developers/admins of other external resources) modify their scripts/servers to include the necessary cookies settings to the cookies they generate when your website includes them. 