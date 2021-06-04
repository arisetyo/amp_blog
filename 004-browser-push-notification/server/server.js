/**
 * The backend server
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const cors = require('cors');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// configure CORS to accept requests from localhost:3600
const corsOptions = {
  origin: 'http://localhost:3600',
  optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions));

// load static file
app.use(express.static(path.join(__dirname, '../client')));

// server test
app.get('/ping', (_, res) => {
  res.send({status: 'success'});
});


/**
 *  1. get VAPID keys
 *     `$ web-push generate-vapid-keys`
 *     or go to http://web-push-codelab.glitch.me/
 *     The application server keys, also known as VAPID keys, are unique to your server. 
 *     They allow a push service to know which application server subscribed a user and ensure that it's the same server triggering the push messages to that user.
 */
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
webPush.setVapidDetails('mailto:test@example.com', publicVapidKey, privateVapidKey);

/**
 * 2. handle request for "subscribe" API endpoint from the client
 */
app.post('/subscribe', (req, res) => {
  /** receives the subscription information from the client */
  const subscription = req.body

  res.status(201).json({});

  /**
   * 3. prepare the payload to push to the browser
   */
  const payload = JSON.stringify({
    title: 'Halo, para pemirsa!',
    message: 'Acara akan segera dimulai. Ayo segera bergabung ke situs kami!'
  });

  /**
   * 4. push the notification
   *    use the subcription information received from the client, back to the client, to trigger the serviceWorker
   */
  webPush
  .sendNotification(subscription, payload)
  .catch(error => console.error(error));

});

// run the Express server
app.set('port', process.env.PORT || 3500);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on PORT ${server.address().port}`);
});