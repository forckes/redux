import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/myValue/slice'
import { getCounterValue } from '../redux/myValue/slice'

export default function Counter() {
	const dispatch = useDispatch()

	const value = useSelector(getCounterValue)
	return (
		<div>
			<button onClick={() => dispatch(increment(10))}>increment[on 10]</button>
			<p>{value}</p>
			<button onClick={() => dispatch(decrement(10))}>decrement[on 10]</button>
		</div>
	)
}
