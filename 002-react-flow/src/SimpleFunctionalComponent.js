// @flow

/**
 * Example of functional component written with Flow
 * @author Arie M. Prasetyo
 * @copyright 2021
 */

// We need to import React types
import type {Node} from "react";
import React, {Component} from 'react';

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