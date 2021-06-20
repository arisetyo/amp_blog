/**
 * Sample C - Child of Child 02
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React, {useContext} from 'react';
import SampleCContext from './SampleCContext';

/**
 * Sample C - Child of Child 02
 */
const SampleCChild0201 = () => {

  const {data} = useContext(SampleCContext);

  return (
    <div>

      <h3>Sample C - Child of Child 02</h3>
      <p>{data}</p>

    </div>
  );
};


export default SampleCChild0201;