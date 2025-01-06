import { useRef } from "react";

const SampleFUnControlledForm = () => {

    const nameRef = useRef()
    const handleSend = (e) => {
        console.log(nameRef.current.value)
    }
    const changeHandler = (e) => {
        console.log(nameRef.current.value)
    }

    return(
        <div>
            <input type="text" name="name" ref={nameRef} onChange={changeHandler} />
            <input type="button" value="send" onClick={handleSend} />
        </div>
    )
}
export default SampleFUnControlledForm;