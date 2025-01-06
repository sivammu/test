import React, { useState } from 'react';
import Child from './Child';
const Parent = () => {

    const [count, setCount] = useState(0)
    
    const handleEvent = (e) => {
        setCount(count +1)
    }

    const childEventHandler = (name) => {
        console.log(name)
        setCount(count -1)
    }

    return (
        <div>
            <h1>parent Component {count}</h1>
            <input type="button" value="Increment" onClick={handleEvent} />
            <Child count = {count} childEvent = {childEventHandler}/>
        </div>
    )
}
export default Parent