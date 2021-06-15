import {useState as useState_, useCallback} from 'react';
import {evolve, mapObjIndexed, type, always} from 'ramda';

const useState = default_ => {
	const [state, setState_] = useState_(default_);

	const setState = useCallback(object => {
		const smartObject = mapObjIndexed(value => {
			if (type(value) !== 'Function') {
				return always(value);
			}

			return value;
		}, object);

		setState_(evolve(smartObject));
	}, [setState_]);

	return {state, setState};
};

export default useState;
