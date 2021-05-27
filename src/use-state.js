import {useState as useState_, useCallback} from 'react';
import {evolve} from 'ramda';

const useState = default_ => {
	const [state, setState_] = useState_(default_);

	const setState = useCallback(object => setState_(evolve(object)), [setState_]);

	return {state, setState};
};

export default useState;
