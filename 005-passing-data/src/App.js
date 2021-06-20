/**
 * Main application
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

import React from 'react';
import styles from './App.css';

import SampleA from './SampleA';
import SampleB from './SampleB';
import SampleC from './SampleC';

/**
 * The main React application component
 * 
 * Note:
 * In this example, the App component is a stateless React component.
 */
const App = () => (
  <div
    className={styles.App}>

    <h1>Main app</h1>
    <p>This the parent app</p>

    <SampleA/>
    <SampleB/>
    <SampleC/>

  </div>
);

export default App;