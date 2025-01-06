import { useEffect, useState } from "react"

const UseEffect = ()=> {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
  
      // Cleanup the interval when the component unmounts or when seconds change
      return () =>  clearInterval(timer)
     }, []); // The empty array means this effect runs once when the component mounts
  
    return <h1>{seconds} seconds</h1>;


    // const [count, setCount] = useState(0)
    // const [uedepend, setUsdepent] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount(count+1)
    //     }, 2000

    //     )
    // },[uedepend]

    // )

   

    // return(
    //     <div>
    //         {count}
    //         {uedepend}
    //         <input type="button" value="update depend" onClick={()=> setUsdepent(!uedepend)} />
    //     </div>
    // )
}
export default UseEffect