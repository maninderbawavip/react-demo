import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import { Square } from './Sqaure';

export const GameBoard = (props) => {

    const { myName, changeMyName } = useContext(UserContext)

    const renderSqaure = (num) => {
        return <Square 
            num={num} 
            value={props.values[num]} 
            handleClick={() => {props.handleClick(num)}}
        />
    }



    return (
        <div>
            {props.winner ?  `Winner is ${props.winner}`: `Next Player Turn: ${props.whoIsNext}`}
            User name is {myName.userName}
            Full Name is {myName.fullName}

            <button onClick={() => changeMyName({ userName: "Rahul", fullName: "Rahul Bawa" })}>Change Name</button>
            <div className="board-row">
                
                {renderSqaure(0)}
                {renderSqaure(1)}
                {renderSqaure(2)}
            </div>
            <div className="board-row">
                {renderSqaure(3)}
                {renderSqaure(4)}
                {renderSqaure(5)}
            </div>
            <div className="board-row">
                {renderSqaure(6)}
                {renderSqaure(7)}
                {renderSqaure(8)}
            </div>

            <button onClick={props.resetGame}> Reset Game</button>

        </div>
    )
}