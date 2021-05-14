/**
 * Main application
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';
import {multiply, retStr, retBool, retBool2, square, foo} from './someMethods';
import styles from './App.css';
import SimpleComponent from './SimpleComponent';
import SimpleFunctionalComponent from './SimpleFunctionalComponent';

/**
 * The main React application component
 * 
 * Note:
 * In this example, the App component is a stateless React component.
 */
const App = () => {
	
	const x = 3;

	return (
		<div
			className={styles.App}>
			
			<h1>Flow</h1>
	
			<p>
				Static typing using Flow
			</p>

			<p>{square(x)}</p>
			<p>{square(16)}</p>
			<p>{multiply(14, 12)}</p>

			<SimpleFunctionalComponent text={'This is some text'} addExclamationMark={true}/>

			<SimpleComponent foo={'42'} bar={'is the meaning of life'}/>
	
		</div>	
	)
};

export default App;