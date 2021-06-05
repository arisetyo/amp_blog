/**
 * To-do list item input component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {useState} from 'react';
import styles from './ItemInput.css';


const ItemInput = ({id, itemTodo, isDone, isEditing}) => {

  const [value, setValue] = useState('');

  // handler for input change
  const changeHandler = e => {
    e.preventDefault();
    setValue(e.target.value);
  }

  // handler for detecting Enter key (submit the item to Context)
  const keyDownHandler = e => {
    if (e.keyCode === 13) console.log(`SUBMIT ITEM: ${value}`);
  }

  return(
    <div className={styles.ItemInput}>
      <input
        type="text"
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        placeholder="Add item..."/>
    </div>
  )
}

export default ItemInput;