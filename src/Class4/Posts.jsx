import axios from "axios"
import { useEffect, useState } from "react"
import Post from "./Post"

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res =>{
            setPosts(res.data)
        })
        .catch(ex => console.log(ex))
    }, [])

    return (

        <div>
            <h1>Posts</h1>
            <table class="table table-bordered border-primary">
            <th>Title</th>
            <th>Body</th>
            {/* {posts.map(post=> <tr> <td>{post.title}</td>  <td>{post.body}</td>  </tr>)} */}
            {posts.map(post => <Post key= {post.id} post = {post} />)}
            </table>

        </div>

    )
}
export default Posts