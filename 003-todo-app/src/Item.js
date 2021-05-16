/**
 * To-do list item component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {Fragment, useState} from 'react';
import styles from './Item.css';

/**
 * 
 * This component have 2 properties:
 * 1. itemTodo (string), the item to do
 * 2. isDone (boolean), if `true`, add strikethrough style on the text and reduce the font's opacity
 * 3. editing (boolean), if `true`, show editing mode
 * 
 * We also need the ability to remove an item. More on that later.
 * 
 * This function component has a state to store it's value when editing.
 * To do that, we'll use the `useState` Hook.
 * `useState` is a Hook that lets you add React state to function components.
 */

const Item = ({id, itemTodo, isDone, isEditing}) => {

  const [value, setValue] = useState('');

  // handler for item removal
  const removeItemHandler = (e, id) => {
    e.preventDefault();
    removeItem(id);
  }

  // function to remove an item from the to-do list
  const removeItem = id => {
    console.log(`REMOVING ITEM ${id}`);
  }

  // handler for input change
  const changeHandler = e => {
    e.preventDefault();
    setValue(e.target.value);
  }

  // handler for detecting Enter key
  const keyDownHandler = e => {
    if (e.keyCode === 13) console.log(`SUBMIT ITEM: ${value}`);
  }

  const itemToRender = () => {
    if (!isEditing) {
      return (
        <Fragment>
          <span
            className={isDone ? styles.done : ''}>
            {itemTodo}
          </span>

          <button onClick={e => removeItemHandler(e, id)}>
            ✕
          </button>
        </Fragment>
      );
    } else {
      return (
        <input
          type="text"
          onChange={changeHandler}
          onKeyDown={keyDownHandler}/>
      );
    }
  }

  return (
    <div
      className={styles.Item}>

      {itemToRender()}

    </div>
  );
}

export default Item;