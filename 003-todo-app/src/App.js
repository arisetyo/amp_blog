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

	/**
	 * Render the items
	 * 
	 * The data should contain the date an item is `done`
	 * If the `done` date is similar to current date, render it in the item list. Otherwise, don't render it.
	 */
	const openItemData = [
		{itemTodo: '', isDone: false, createTS: new Date(), doneTS: null, isEditing: true},
		{itemTodo: 'Beli telur', isDone: true, createTS: new Date(), doneTS: null, isEditing: false},
		{itemTodo: 'Beli minyak', isDone: false, createTS: new Date(), doneTS: null, isEditing: false},
		{itemTodo: 'Beli susu', isDone: true, createTS: new Date(), doneTS: null, isEditing: false},
		{itemTodo: 'Beli mobil', isDone: false, createTS: new Date(), doneTS: null, isEditing: false}
	];

	console.log(openItemData);
	const itemComponents = openItemData.map( (i, index) => {
		return (
			<Item
				key={index}
				id={index}
				itemTodo={i.itemTodo}
				isDone={i.isDone}
				isEditing={i.isEditing}/>
		)
	});

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