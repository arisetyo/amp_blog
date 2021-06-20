/**
 * Child of Sample A component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';

/**
 * Sample A Child
 * 
 * Receiving data from parent
 */
const SampleAChild = props => (
  <div>
    <span
      style={ {backgroundColor: props.selectedColor} }
    >
      { `Child ${props.identity}` }
    </span>
  </div>
);

export default SampleAChild;