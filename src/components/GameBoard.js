import React from 'react';
import { Square } from './Sqaure';

export const GameBoard = (props) => {

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