import { useSelector, useDispatch } from 'react-redux'
import { sayHello } from '../actions/Hello'
import { increment, decrement } from '../actions/Counter'
import { useState } from 'react'


export const Hello = () => {
    const [magicNumber, setMagicNumber] = useState(0)
    const dispatch = useDispatch()
    const { greeting } = useSelector(state => state.HelloReducer)
    const { counter } = useSelector(state => state.CounterReducer)
    return (
        <div>
            <h1>{greeting}</h1>
            <button onClick={() => dispatch(sayHello())}>
                Click me for hello
            </button>
            <hr />
            <p> Coounter : {counter}</p>
            <input
                type='number'
                placeholder='Incr / Decr by number'
                value={magicNumber}
                onChange={(e) => setMagicNumber(Number(e.target.value))}
            />
            <button onClick={() => dispatch(increment(magicNumber))}
            >
                +
            </button>
            <button onClick={() => dispatch(decrement(magicNumber))}
            >
                -
            </button>
        </div>
    )
}