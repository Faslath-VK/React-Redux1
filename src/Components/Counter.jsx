import { useDispatch, useSelector } from "react-redux"
import { decrement_count, increment_count } from "../Redux/count/countSlice"



const Counter=()=>{
const count = useSelector(state => state.count.value) 
const dispatch = useDispatch()

const increment =() => {
    dispatch(increment_count())
}
const decrement =() =>{
    dispatch(decrement_count())
}


    return(
        <div className="counter">
            <h2>Counter</h2>
            <h3>The count is -{count} </h3>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    )
}
export default Counter