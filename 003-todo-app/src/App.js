/**
 * Main application
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';
import styles from './App.css';

import Item from './Item';
import ItemInput from './ItemInput';

/**
 * The main React application component
 */
const App = () => {

	// put data in context
	const openItemData = [
		{itemTodo: 'Beli telur', isDone: true},
		{itemTodo: 'Beli minyak', isDone: false},
		{itemTodo: 'Beli susu', isDone: true},
		{itemTodo: 'Beli mobil', isDone: false}
	];

	const itemComponents = openItemData.map( (i, index) => {
		return (
			<Item
				key={index}
				id={index}
				itemTodo={i.itemTodo}
				isDone={i.isDone}/>
		)
	});

	return (
		<div
			className={styles.App}>
			
			<h1>My To-do app</h1>
			<summary>Open list: {openItemData.length}</summary>

			<ItemInput/>

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