const Child = (props) => {

    const clickhandler = () => {
        props.childEvent("Siva")
    }

    return (
        <div>
            <h1>Child Component :{props.count}</h1>
        <input type="button" value="Decrement" onClick={clickhandler} />
        </div>

    )
}
export default Child