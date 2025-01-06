import { useReducer } from "react"
import { Reducer } from "./reducer"

const Count = () =>{
    const initialState = {count : 0}

    const[state, dispatch] = useReducer(Reducer, initialState)
    return(
        <div>
            <div>Count ---- {state.count}</div>
            <div><input type="button" value="Increment" onClick={()=>dispatch({type :"increment"})} /></div>
            <div><input type="button" value="Increment" onClick={() =>dispatch({type :"decrement"})} /></div>
        </div>
    )
}
export default Count