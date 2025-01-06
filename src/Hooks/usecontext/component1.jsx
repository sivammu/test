import { createContext,useContext, useState } from "react"
import Component2 from "./component2"
const countContext = createContext()
const Component1 = () => {
    const [count, setCount] = useState(0)
    

    return(
        <countContext.Provider value={count} >
        <div>
        <h1>Parent Component</h1>
        <div>
            <input type="button" value="increment" onClick={() => setCount(count+1)} />
        </div>
        {/* <Component2 count = {count}/> */}
        <Component2 count = {count}/>
        </div>
        </countContext.Provider>

        
    )

   
}
export default Component1
export const useCount = () => {
    return useContext(countContext)
}