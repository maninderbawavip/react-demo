import React, { useState } from 'react';
import { GameBoard } from './GameBoard';
import { GameInfo } from './GameInfo';

export const Content = () => {


    const DEFAULT_STATE = [null,null,null,null,null,null,null,null,null]

    const [values, changeValues] = useState(DEFAULT_STATE)

    const [whoIsNext, changeNext] = useState('X')
    const [winner, setWinner] = useState(null)

    const handleClick = (num) => {

        if((winner === null) && (values[num] === null)) {
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
            addStepToHistory(num, newValues[num], whoIsNext)
            calculateWinner()
        } else {
            //nothing
        }
        
    }

    // definition of a function

    const calculateWinner = () => {

        const winningRows = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(const row of winningRows){
            if(values[row[0]] && (values[row[0]] === values[row[1]]) && ( values[row[1]] === values[row[2]])){
                setWinner(values[row[0]])
                break;
            }
        }

    }

    const resetGame = () => {
            changeValues(DEFAULT_STATE)
            changeNext('X')
            setWinner(null)
            setHistory([])
    }

    const addStepToHistory = (num, value, whoIsNext) => {
        const newStep = {
            squareNum: num,
            value: value,
            whoIsNext
        }
        setHistory([...history, newStep])
    }

    const [history, setHistory] = useState([])

    return(
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div><GameBoard 
                values={values}
                handleClick={handleClick}
                winner={winner}
                whoIsNext={whoIsNext}
                resetGame={resetGame}
            /></div>
            <div><GameInfo 
                history={history}
            /></div>
        </div>
    )
}

