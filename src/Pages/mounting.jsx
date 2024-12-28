import axios from "axios"
import { useEffect, useState } from "react"

const Mounting = () => {
    //useState
    const [data, setData] = useState([])
    //useEffect
    useEffect(()=>
        {

            
            console.log("useEffect")
            setTimeout(() => {                
                const data1 = axios.get("https://dummyjson.com/products").then((res) => console.log(res.data.products)).catch((e) => console.log(e))
                setData(data1);
            }, 2000);
        },
    [])
    return (
        
        <div>
            {console.log("render")}
            {data.map((product)=> <h1>{product.title}</h1>)}
            
            
            </div>
    )
}
export default Mounting;