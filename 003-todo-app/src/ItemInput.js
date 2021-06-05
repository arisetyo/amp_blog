/**
 * To-do list item input component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {useContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ItemInput.css';
import ItemsContext from './ItemsContext';

const ItemInput = ({id, itemTodo, isDone, isEditing}) => {

  const [inputvalue, setInputvalue] = useState('');

  const {data, changeData} = useContext(ItemsContext);

  // handler for input change
  const changeHandler = e => {
    e.preventDefault();
    setInputvalue(e.target.value);
  }

  // handler for detecting Enter key (submit the item to Context)
  const keyDownHandler = e => {
    if (e.keyCode === 13) {
      const newData = [...data, {itemId: uuidv4(), itemTodo: inputvalue, isDone: false}];
      changeData(newData);
    }
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