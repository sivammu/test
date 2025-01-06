import React, {Component} from 'react'

export default class SampleClassForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "Siva"
        }

    }

    handleEvent= (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    onSubmitHandler = (e) => {
         e.preventDefault()
        console.log(this.state.name)
    }

    render() {
        return(
            <form onSubmit={this.onSubmitHandler}>
            <div>Test Class components</div>
            <div>{this.state.name}</div>
            <div>
                <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleEvent} />
                <input type="submit" value="submit"  />


            </div>
            </form>
        )
    }

}