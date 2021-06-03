/**
 * Main application
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';
import styles from './App.css';

/**
 * The main React application component
 * 
 * Note:
 * In this example, the App component is a stateless React component.
 */
const App = () => (
	<div
		className={styles.App}>
		
		<h2>Example of browser push notification in React app</h2>

		<button>Trigger push notification</button>

	</div>	
);

export default App;