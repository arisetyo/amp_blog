/**
 * Main application
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {useState} from 'react';
import styles from './App.css';

import ItemInput from './ItemInput';
import ItemsList from './ItemsList';
import ItemsContext from './ItemsContext';

/**
 * The main React application component
 */
const App = () => {

	// check whether there's a list stored in the local storage
	let storedList = [];
	if (typeof(Storage) !== 'undefined') {	
		const localData = localStorage.getItem('LocalListData');
		if (localData) storedList = JSON.parse(localData);
	}

	// provide a method to change the context
	const [data,changeData] = useState(storedList);

	return (
		<ItemsContext.Provider value={{data, changeData}}>
			<div
				className={styles.App}>
				
				<header>
					<h1>My To-do app</h1>
					<summary>Open list: {data.length}</summary>
					<summary>Completed list: {data.filter(d => d.isDone).length}</summary>
				</header>

				<ItemInput/>
				<ItemsList/>

				<footer>&copy; Arie M. Prasetyo, 2021</footer>

			</div>
		</ItemsContext.Provider>
	)
};

export default App;