/**
 * Add button component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';
import styles from './AddButton.css';

const AddButton = () => {
  return (
    <div
      className={styles.AddButton}>

      <button>Add item ➕</button>

    </div>
  );
}

export default AddButton;