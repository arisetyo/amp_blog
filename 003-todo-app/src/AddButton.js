/**
 * Add button component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {useState} from 'react';
import styles from './AddButton.css';

/**
 * This component has state:
 * adding (boolean)
 */
const AddButton = () => {
  // set the state
  const [adding, setAdding] = useState(false);

  return (
    <div
      className={styles.AddButton}>

      <button>Add item ➕</button>

    </div>
  );
}

export default AddButton;