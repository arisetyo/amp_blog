/**
 * Sample A component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';
import SampleAChild from './SampleAChild';

/**
 * Sample A
 * 
 * Passing down data
 */
const SampleA = () => (
  <div>

    <h2>Sample A</h2>

    <p>This component is sending color values to its children</p>

    <SampleAChild identity={1} selectedColor={'red'}/>
    <SampleAChild identity={2} selectedColor={'green'}/>
    <SampleAChild identity={3} selectedColor={'blue'}/>

  </div>	
);

export default SampleA;