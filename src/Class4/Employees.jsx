const Employees = () => {
    const list = ["Siva", "Batchu", "Varshith", "Rushith"]
    return(
        <ul>
            {list.map((name,index) => <li key={index}>{name}</li>)}
        </ul>
    )
}
export default  Employees