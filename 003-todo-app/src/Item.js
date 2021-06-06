/**
 * To-do list item component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {Fragment, useContext} from 'react';
import styles from './Item.css';
import ItemsContext from './ItemsContext';

const Item = ({itemId, itemTodo, isDone}) => {

  const {data, changeData} = useContext(ItemsContext);

  // handler for item removal
  const removeItemHandler = e => {
    e.preventDefault();

    const tempData = [...data];
    
    const objIndex = tempData.findIndex((obj => obj.itemId === itemId));
    tempData.splice(objIndex, 1);

    changeData(tempData);
  }

  // handler for setting item as done
  const setDoneHandler = e => {
    e.preventDefault();
    
    const tempData = [...data];
    
    const objIndex = tempData.findIndex((obj => obj.itemId === itemId));
    tempData[objIndex].isDone = !tempData[objIndex].isDone;

    // update the context
    changeData(tempData);

    // update the local storage
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('LocalListData', JSON.stringify(tempData));
    }
  }

  return (
    <div
      className={styles.Item}>

      <span
        className={isDone ? styles.done : ''}
        onClick={e => setDoneHandler(e)}>
        {itemTodo}
      </span>

      <button onClick={e => removeItemHandler(e)}>
        ✕
      </button>

    </div>
  );
}

export default Item;