/**
 * Sample C component
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {useState} from 'react';

import SampleCContext from './SampleCContext';
import SampleCChild01 from './SampleCChild01';
import SampleCChild02 from './SampleCChild02';

/**
 * Sample C
 * 
 * Context source
 */
const SampleC = () => {

  // provide a method to change the context
	const [data, changeData] = useState('');

  return (
    <SampleCContext.Provider value={{data, changeData}}>
      <div>

        <h2>Sample C</h2>

        <p>{data}</p>

        <SampleCChild01/>
        <SampleCChild02/>

      </div>
    </SampleCContext.Provider>
  );
};


export default SampleC;