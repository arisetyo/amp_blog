/**
 * Main application
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';
import styles from './App.css';

import Item from './Item';
import AddButton from './AddButton';

/**
 * The main React application component
 */
const App = () => {

	// render the items
	const openItemData = [0,0,0,0,0,0];
	const itemComponents = openItemData.map( i => <Item/>);

	return (
		<div
			className={styles.App}>
			
			<h1>My To-do app</h1>
			<summary>Open list: {openItemData.length}</summary>

			<AddButton/>

			<div
				className={styles.itemContainer}>
				
				{itemComponents}
			</div>

			<summary>Completed list: 0</summary>
			<footer>&copy; Arie M. Prasetyo, 2021</footer>

		</div>	
	)
};

export default App;