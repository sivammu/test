import Component3 from "./component3"

const Component2 = () => {

    return (
        <div>
        <h1>Child component 1</h1>
        <div>Child component 1 --- </div>
        {/* <Component3 count = {props.count}/> */}
        <Component3/>
        </div>

    )
}
export default Component2