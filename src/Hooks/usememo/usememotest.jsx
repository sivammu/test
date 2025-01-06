import { useMemo, useState } from "react"
const multiply =({num}) => {
    console.log("multiply.........")
    return <div>{num * 2}</div>;
}
const UseMemotest = ()=> {
    const [num, setNum] = useState(1)
    const [mulenable, setMulEnable] = useState(false)

   

    const memMultiply = useMemo(()=> {
        return multiply({num})
    }, [mulenable])
    return(
        <div>
            <div>num --- {num}---- </div>
            {memMultiply}
            <div><input type="button" value="increment" onClick={() =>setNum(num+1)} /></div>
            {/* <div><input type="radio" name="toggle" id="toggle" value={mulenable} onChange={(e) => setMulEnable(e.target.value)} /></div> */}
            <div><input type="checkbox" name="toggle" id="toggle" checked={mulenable}
 onChange={(e) => {console.log(e.target.value); setMulEnable(!mulenable);}} /></div>
        </div>
    )
}
export default UseMemotest