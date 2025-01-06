import { useContext } from "react"
import { useCount } from "./component1"

const Component3 = () => {
    const count =    useCount()
    return (
        <div>
        <h1>Child component 3</h1>
        {/* <div>Child component 3 --- {props.count}</div> */}
        <div>Child component 3 --- {count}</div>
        </div>

    )
}
export default Component3