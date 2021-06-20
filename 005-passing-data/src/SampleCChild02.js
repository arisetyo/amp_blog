/**
 * Sample C - Child 02
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {useContext} from 'react';
import SampleCContext from './SampleCContext';
import SampleCChild0201 from './SampleCChild0201';

/**
 * Sample C - Child 02
 */
const SampleCChild02 = () => {

  const {data} = useContext(SampleCContext);

  return (
    <div>

      <h3>Sample C - Child 02</h3>
      <p>{data}</p>

      <SampleCChild0201/>

    </div>
  );
};


export default SampleCChild02;