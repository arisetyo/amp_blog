/**
 * Sample B component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {useState} from 'react';
import SampleBChild from './SampleBChild';

/**
 * Sample B
 * 
 * State lifting example
 */
const SampleB = () => {

  const [value, setValue] = useState('...');

  const childEventHandler = eventData => {
    setValue(eventData);
  };

  return (
    <div>

      <h2>Sample B</h2>

      <h3>{value}</h3>

      <SampleBChild onMountedHandler={childEventHandler}/>

    </div>	
  );
};


export default SampleB;