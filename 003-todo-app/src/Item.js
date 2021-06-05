/**
 * To-do list item component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {Fragment, useState} from 'react';
import styles from './Item.css';

const Item = ({id, itemTodo, isDone}) => {

  // handler for item removal
  const removeItemHandler = (e, id) => {
    e.preventDefault();
    removeItem(id);
  }

  // function to remove an item from the to-do list
  const removeItem = id => {
    console.log(`REMOVING ITEM ${id}`);
  }

  return (
    <div
      className={styles.Item}>

      <span
        className={isDone ? styles.done : ''}>
        {itemTodo}
      </span>

      <button onClick={e => removeItemHandler(e, id)}>
        ✕
      </button>

    </div>
  );
}

export default Item;