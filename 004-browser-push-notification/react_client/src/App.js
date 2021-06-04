/**
 * Main application
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';
import styles from './App.css';
import axios from 'axios';
import { urlBase64ToUint8Array, publicVapidKey } from './helpers';

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

/** trigger push notification */
const sendRequest = async () => {
	if (!('serviceWorker' in navigator)) {
    console.error('Service workers are not supported in this browser');
    return;
  }

  if (!('PushManager' in window)) {
    console.error("Push isn't supported on this browser, disable or hide UI.");
    return;
  }

  // 1. Register `sw.js` as a service worker, assign to variable `register`
  const register = await navigator.serviceWorker.register('./sw.js', {
    scope: '/'
  });

	// 2. Make the register variable to subscribe to the pushManager, assign as `subscription` variable.
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });

	const headers = {'Content-Type': 'application/json'};
	const body = JSON.stringify(subscription);

	// 3. Call the backend API to trigger webPush.sendNotification, then send the subscription information (as `subscription` variable) to the backend
	await axios.post('http://localhost:3500/subscribe', body, {headers})
	.then( response => {
		console.log(response.data);
	})
	.catch( error => {
		console.log(error);
	});

};

export default App;