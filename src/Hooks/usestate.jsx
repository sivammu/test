import { useState } from "react"


const UseState = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <input type="button" value="submit" onClick={()=>setCount(count+1)} />
        </div>
    )
}
export default UseState