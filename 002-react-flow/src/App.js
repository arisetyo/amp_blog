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
import NoFlowComponent from './NoFlowComponent';

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

			<div>
				<h2>Functions written with Flow</h2>
				<p>{square(x)}</p>
				<p>{square(16)}</p>
				<p>{multiply(14, 12)}</p>
			</div>

			<SimpleFunctionalComponent text={'This is some text'} addExclamationMark={true}/>

			<SimpleComponent foo={'42'} bar={'is the meaning of life'}/>

			<NoFlowComponent/>
	
		</div>	
	)
};

export default App;