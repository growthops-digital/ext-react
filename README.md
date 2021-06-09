# GrowthOps Ext React

[![codecov](https://codecov.io/gh/growthops-digital/ext-react/branch/main/graph/badge.svg?token=4ECGIC3SDY)](https://codecov.io/gh/growthops-digital/ext-react)

A collection of useful components, helpers, and extensions for React projects.

## Utilities

### useState
`import {useState} from '@growthops/ext-react';`

This is a wrapper around React's standard `useState` hook, offering out of the box integration with `Ramda`'s `evolve` function.

**Example:**
```js
import React from 'react';
import {useState} from '@growthops/ext-react';
import {inc} from 'ramda';

const Example = () = {
	const {state, setState} = useState({counter: 0});

	const incrementCounter = setState({counter: inc});

	return (
		<button type="button" onClick={incrementCounter}>Increment</button>
	);
};

export default Example;
```
