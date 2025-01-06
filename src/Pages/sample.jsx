import { useEffect, useState } from "react";

const Sample = () => {
    const [name, setName] =  useState();
    useEffect(() =>
    { setName("Batchu")},
    [])

    
    
    return(
        <>
        <h1>{name}</h1>
        <button onClick={(e) => setName("Prasda")} >Test</button>
        <input type="text" value={name} onChange={(e) => setName(e.value)}/>
        </>
    )
}

export default Sample;