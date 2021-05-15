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
		
		<h1>Hello world!</h1>

		<p>
			This is <code>amp-react-app</code> 👋🏽
		</p>

	</div>	
);

export default App;