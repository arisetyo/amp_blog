/**
 * To-do list item component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';
import styles from './Item.css';

const Item = () => {
  return (
    <div
      className={styles.Item}>

      <input type="checkbox"/>
      
      <span>Beli telur</span>

    </div>
  );
}

export default Item;