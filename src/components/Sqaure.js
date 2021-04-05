import { Component } from "react"

export const Square = (props) => {

    return (<button
        className="square"
        onClick={props.handleClick}
    >
        {props.value}
    </button>)
}


export class Sqaure extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }

    changeValue = () => {
        // Never mutate the state directly
        // this.state.value = 'X'
        this.setState({ value: 'X' })
        this.setState({ value: 'O' })
        this.setState({ value: 'X' })
        this.setState({ value: 'O' })
        this.setState({ value: 'X' })
        this.setState({ value: 'O' })
        this.setState({ value: 'X' })
    }

    render() {
        return (
            <button
            className="square"
            onClick={this.changeValue}
        >
            {this.state.value}
        </button>
        )
    }

}





