import axios from "axios"
import { useState } from "react"

const CreatePost = () => {

    const [response, setResponse] = useState("")

    let post = {
        "userId": 11,
        "id": 101,
        "title": "Sample",
        "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
      }
    

    const clickHandler = () => {

        axios.post ("https://jsonplaceholder.typicode.com/posts", post)
        .then(res => setResponse(JSON.stringify(res.data)))
        .catch(e => console.log(e))
    }

    return (
        <div>
            <h4>{response}</h4>
            <input type="button" value="Create Post" onClick={clickHandler} />
        </div>
    )
}

export default CreatePost