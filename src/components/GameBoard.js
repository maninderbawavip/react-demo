import React, { useState } from 'react';
import { Square } from './Sqaure';

export const GameBoard = () => {

    const DEFAULT_STATE = [null,null,null,null,null,null,null,null,null]

    const [values, changeValues] = useState(DEFAULT_STATE)
    const [whoIsNext, changeNext] = useState('X')


    const handleClick = (num) => {

        // set the value of that square in values state
        const newValues = values; // copy of prev values of sqaures
        newValues[num] = whoIsNext;
        changeValues(newValues)


        // set the value of who is next
        // let nextTurn = null;
        // if(whoIsNext === 'X') {
        //     nextTurn = 'O'
        // } else {
        //     nextTurn = 'X'
        // }
        // changeNext(nextTurn)
        // ternary operator
        changeNext(whoIsNext === 'X' ? 'O':'X')
        
    }

    const renderSqaure = (num) => {
        return <Square 
            num={num} 
            value={values[num]}
            handleClick={() => handleClick(num)}
        />
    }

    return (
        <div>
            Next Player Turn: {whoIsNext}
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

            <button onClick={() => changeValues(DEFAULT_STATE)}> Reset Game</button>

        </div>
    )
}