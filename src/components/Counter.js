import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementBy, reset } from "../slices/counterSlice"

export const Counter = () => {
    const dispatch = useDispatch()
    const inputRef = useRef(null)
    const { count } = useSelector(state => state.counter)
    return <div>
        <p>Counter :{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <div>
                <input type='number' ref={inputRef} />
                <button onClick={() => {
                    const inputValue = inputRef.current.value
                    dispatch(incrementBy(inputValue))
                }}
                >Increment by</button>
            </div>
        </div>
    </div>
}