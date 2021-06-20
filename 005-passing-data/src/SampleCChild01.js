/**
 * Sample C - Child 01
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {useContext} from 'react';
import SampleCContext from './SampleCContext';

/**
 * Sample C - Child 01
 * 
 * Data sender
 */
const SampleCChild01 = () => {

  const {data, changeData} = useContext(SampleCContext);

  const clickHandler = e => {
    e.preventDefault();

    changeData('THIS IS THE DATA');
  }

  return (
    <div>

      <h3>Sample C - Child 01</h3>
      <p>This button will send data to its parent <code>SampleC</code>, its sibling <code>SampleCChild02</code>, and its sibling's child <code>SampleCChild0201</code>.</p>
      <button onClick={clickHandler}>SEND DATA</button>

    </div>	
  );
};


export default SampleCChild01;