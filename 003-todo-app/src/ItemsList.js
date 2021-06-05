/**
 * To-do list item input component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {useContext, useState} from 'react';
import styles from './ItemsList.css';
import ItemsContext from './ItemsContext';

import Item from './Item';

const ItemsList = () => {

  const {data} = useContext(ItemsContext);

  const itemComponents = data.map( (i, index) => {
		return (
			<Item
				key={index}
				id={index}
				itemTodo={i.itemTodo}
				isDone={i.isDone}/>
		)
	});

  return(
    <div
      className={styles.ItemsList}>
      {itemComponents}
    </div>
  )
}

export default ItemsList;