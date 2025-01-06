import { useState } from "react"

const Register = () => {
    const [user, setUser] = useState({
        firstname : "",
        email : "",
        password : ""        
    })

    const onChangehandler = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();       
        
        console.log(user.firstname +" -" +user.email+" -"+user.password)
    }
    return(
        <form onSubmit={submitHandler}>
            <div>
                <input type="text" name="firstname" value={user.firstname} onChange={onChangehandler} />
                <input type="text" name="email" value={user.email} onChange={onChangehandler} />
                <input type="password" name="password" value={user.password} onChange={onChangehandler} />
                <input type="submit" value="Submit" />
            </div>
        
        </form>
    )
}
export default Register