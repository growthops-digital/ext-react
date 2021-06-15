# GrowthOps Ext React

[![codecov](https://codecov.io/gh/growthops-digital/ext-react/branch/main/graph/badge.svg?token=4ECGIC3SDY)](https://codecov.io/gh/growthops-digital/ext-react)

A collection of useful components, helpers, and extensions for React projects.

## Utilities

### useState
`import {useState} from '@growthops/ext-react';`

This is a wrapper around React's standard `useState` hook, offering out of the box integration with Ramda's `evolve` function. There is one notable difference however in this case, any non-function value passed in will be assigned as-is, while functions will be executed with the current state (object) value as you would expect with Ramda's `evolve` function.

**Example 1**
```js
import React from 'react';
import {useState} from '@growthops/ext-react';
import {inc} from 'ramda';

const Example = () = {
	const {state, setState} = useState({counter: 0});

	const incrementCounter = () => setState({counter: inc});

	return (
		<button type="button" onClick={incrementCounter}>Increment</button>
	);
};

export default Example;
```

**Example 2**
```js
import React from 'react';
import {useState} from '@growthops/ext-react';

const Example = () = {
	const {state, setState} = useState({counter: 0});

	const setCounterToFortyTwo = () => setState({counter: 42});

	return (
		<button type="button" onClick={setCounterToFortyTwo}>Set</button>
	);
};

export default Example;
```
