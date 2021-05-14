// @flow

/**
 * Example of functional component written with Flow
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

// We need to import React types
import type {Node} from "react";
import React from 'react';

/**
 * A simple component
 */

type Props = {
	text: string,
	addExclamationMark: boolean,
};

// Standard function format
/*
function SimpleFunctionalComponent({text, addExclamationMark}: Props): Node {
  return (
		<div>
			<h2>Simple functional Component</h2>
			{`${text}${addExclamationMark ? '!' : ''}`}
		</div>
	);
}
*/

// ES6 function format (fat arrow)
// /*
const SimpleFunctionalComponent = ({text, addExclamationMark}: Props): Node => {
	return (
		<div>
			<h2>Simple functional Component</h2>
      {`${text}${addExclamationMark ? '!' : ''}`}
		</div>
	)
};
// */

// if we want to add a default value for the property `text`
SimpleFunctionalComponent.defaultProps = {
  text: 'please add text'
};

export default SimpleFunctionalComponent;