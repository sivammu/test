const Post = (props) => {
    const {userid,id, title, body } = props.post
    return(
        <tr>
            <td>{title}</td>
            <td>{body}</td>
        </tr>
    )
}
export default Post;