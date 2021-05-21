// server.js
require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// load static file
app.use(express.static(path.join(__dirname, '../client')));

// get VAPID keys
/**
 
 */
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
webPush.setVapidDetails('mailto:test@example.com', publicVapidKey, privateVapidKey);

// handle the "subscribe" endpoint
app.post('/subscribe', (req, res) => {
  const subscription = req.body

  res.status(201).json({});

  const payload = JSON.stringify({
    title: 'GoPlay Live - Inside The Studio',
    message: 'Acara akan segera dimulai'
  });

  // push the notification after an amount of time
  webPush
  .sendNotification(subscription, payload)
  .catch(error => console.error(error));

  // we can also use setInterval to continuosly send notification
  
});

// run the Express server
app.set('port', process.env.PORT || 3500);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`);
});