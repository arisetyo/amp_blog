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

const sendRequest = () => {
	axios.get('http://localhost:3500/ping')
	.then( response => {
		// handle success
		console.log(response);
	})
	.catch( error => {
		// handle error
		console.log(error);
	});
}

export default App;