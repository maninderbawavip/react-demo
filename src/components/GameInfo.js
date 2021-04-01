
export const GameInfo = (props) => {

    return(
        <div>
            {props.history.map((step, index) => 
                <div>Step number: {index+1}, Square Number: {step.squareNum}, Sqare Value: {step.value} </div>
            ) }
        </div>

    )
}