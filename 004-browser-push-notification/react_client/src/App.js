/**
 * Main application
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';
import styles from './App.css';
import axios from 'axios';

/**
 * The main React application component
 * 
 * Note:
 * In this example, the App component is a stateless React component.
 */
const App = () => (
	<div
		className={styles.App}>
		
		<h1>Example React app client</h1>

		<p>
			This will trigger an API call to the backend that will push a notification. Then the browser's <span>serviceWorker</span> will capture it and display it as a notification.
		</p>

		<button
			className={styles.triggerPush}
			onClick={ e => {
				e.preventDefault;
				sendRequest();
			}}
			>
			Trigger push notification
		</button>

	</div>	
);

// sending request for push notification
const sendRequest = () => {
	axios.get('http://localhost:3500/ping')
	.then( response => {
		// handle success
		console.log(response.data);
	})
	.catch( error => {
		// handle error
		console.log(error);
	});
};

/** Trigger the push notification */
async function triggerPushNotification() {

  if (!('serviceWorker' in navigator)) {
    console.error('Service workers are not supported in this browser');
    return;
  }

  if (!('PushManager' in window)) {
    console.error("Push isn't supported on this browser, disable or hide UI.");
    return;
  }

  /** 1. Register `sw.js` as a service worker, assign to variable `register` */
  const register = await navigator.serviceWorker.register('./sw.js', {
    scope: '/'
  });

  /** 
    * 2. Make the register variable to subscribe to the pushManager, assign as `subscription` variable.
    *    Subscribe the registered serviceWorker to a channel identified by the VAPID key.
    */
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });

  /** 
    * 3. Call the backend API to trigger webPush.sendNotification,
    *    then send the subscription information (as `subscription` variable) to the backend
    */
  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export default App;