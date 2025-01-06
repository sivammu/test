import { Component } from "react";

class Mounting1 extends Component {
    constructor(props){
        super(props)
        console.log("Into Contructor..")
        this.state = {
            name : ""
        }
    }

    static getDerivedStateFromProps(props, state){
        // console.log(state)
        console.log("Into getDerivedStateFromProps")
        return  {name : "Siva"}
    }

    componentDidMount(){
        console.log("Into ComponentDidMount")
        this.setState({name : "Varshith"})
    }

    render(){
        console.log("into render")
        return(
            <>
            {this.state.name}
            </>
        )
    }
}
export default Mounting1