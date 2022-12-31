require('dotenv').config()
const express = require("express")
const app = express()
const path = require('path')

const Insta = require('scraper-instagram');
const InstaClient = new Insta();

const yourSessionId = '6982271705%3ACqFOjDIwgfTBQH%3A13%3AAYdDXGyOLTu9bedjHmqhwU5bOMZnInMYpA_Ampwh2A';

InstaClient.authBySessionId(yourSessionId)
	.then(account => console.log(account))
	.catch(err => console.error('err: '+err));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

