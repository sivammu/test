import { useState } from "react"

const SampleFControlledForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const changeHandler = (e) => {
        console.log(e)
        
        setName(e.target.value)
        setEmail(e.target.value)
    }
    return(
        <div>
            <h3>{name} {email}</h3>
            <input type="text" name="strname" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" name="stremail" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
    )
}
export default SampleFControlledForm