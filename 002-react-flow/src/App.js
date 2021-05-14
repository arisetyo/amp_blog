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
const App = () => {

	// @flow
	const square = (n: number): number => {
		return n * n;
	}

	// @flow
	const wrongreturn = (n: number): string => {
		return 450;
	}

	// @flow
	function foo(x: ?number): string {
		if (x) {
			return x;
		}
		return "default string";
	}

	return (
		<div
			className={styles.App}>
			
			<h1>Flow</h1>
	
			<p>
				Static typing using Flow
			</p>

			<h2>{square('a')}</h2>
			<h2>{square(16)}</h2>
	
		</div>	
	)
};

export default App;