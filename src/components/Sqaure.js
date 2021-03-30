
export const Square = (props) => {

    return (<button
        className="square"
        onClick={props.handleClick}
    >
        {props.value}
    </button>)
}