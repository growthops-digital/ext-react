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

test('should return new counter value as passed-in', () => {
	const {result} = renderHook(() => useState(initialState));

	act(() => result.current.setState({counter: 42}));

	expect(result.current.state.counter).toBe(42);
});

test('should return new foo value as passed-in, and incremented counter', () => {
	const {result} = renderHook(() => useState(initialState));

	act(() => result.current.setState({
		foo: 'baz',
		counter: inc,
	}));

	expect(result.current.state).toStrictEqual({
		foo: 'baz',
		counter: initialState.counter + 1,
	});
});
