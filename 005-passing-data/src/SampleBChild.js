/**
 * Child of Sample B component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, { useEffect } from 'react';

/**
 * Sample B Child
 * 
 * Lift state
 */
const SampleBChild = props => {
  
  useEffect(() => {
    props.onMountedHandler('Hello from Down Under 🇦🇺🦘');
  });
  
  return (
    <div>
      <p>This child component is sending data to its parent's <code>h3</code> when it is mounted.</p>
    </div>
  );
};

export default SampleBChild;