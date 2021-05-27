import {renderHook, act} from '@testing-library/react-hooks';
import {inc} from 'ramda';
import useState from './use-state.js';

const initialState = {foo: 'bar', counter: 0};

test('should return identical state object', () => {
	const {result} = renderHook(() => useState(initialState));

	expect(result.current.state).toBe(initialState);
});

test('should return incremented counter value', () => {
	const {result} = renderHook(() => useState(initialState));

	act(() => result.current.setState({counter: inc}));

	expect(result.current.state.counter).toBe(initialState.counter + 1);
});
