import React, {useReducer} from 'react'
import {Link} from 'react-router-dom'

import AgGridComponent from '../Components/ag-grid/agGrid.component'

const narcisisticCalc =  (number)=>{

    let numberLong =  Number(number.toString().length)
    let arrayOfNumber = number.toString().split('')
    let totalCalc =  arrayOfNumber.reduce((acumulator, currentValue, index) => {
        acumulator = Number(number[index]) ** (numberLong) + acumulator
        return acumulator
    }, 0)

    return totalCalc

}

const squareEachNumbers = (numberToSquare) => {

    let totalCalc = ''
    numberToSquare.toString().split('').map((x) => {
    return totalCalc += x**2
    })

    return totalCalc

}

const divisorArray = (numberDivisor) => {

    let finalArray = []
        
    let i = 2

    while (i <= numberDivisor){
        if((numberDivisor % i)===0){
            finalArray = finalArray.concat(i)
        }
        i+=1
    }

    if(finalArray.length-1 !=0){
        finalArray.splice(-1,1)
    }
    
    return finalArray

}


const challengesInitialState = {
    number : 0,
    numberToSquare : 0,
    numberDivisor : 0,
}

const START = 'START'
const SQUARE = 'SQUARE'
const DIVISOR = 'DIVISOR'

const challengesReducer = ( state , action ) =>{
    switch(action.type){
        case START:
            console.log('reducer start case');
            return{
                ...state,
                number : action.payload
            }
        case SQUARE:
            console.log('reducer square case');
            return{
                ...state,
                numberToSquare: action.payload
            }
        case DIVISOR:
            console.log('reducer divisor case');
            return{
                ...state,
                numberDivisor: action.payload
            }
        default:
            return{
                ...state
            }  
    }
}

const Reserve = () => {


    const [ state , dispatch ] = useReducer(
        challengesReducer,
        challengesInitialState
    )

    let { number, numberToSquare, numberDivisor } = state

    return(
        <div>
            <h1> 🔥🔥  CHALLENGEEES!!! 🔥🔥 </h1>

            <div>
                <h1 style={{marginTop:'40px'}}> Narcisist </h1>
                <label>Number: </label>
                <input id ='name' type= 'number' name='number' onKeyDown= { e => {      
                    if(e.key === 'Enter'){
                        dispatch({
                            type: START,
                            payload: e.target.value
                        })
                        console.log('procesing')
                    }
                    }}></input>
                <h5>{
                    `${(number == narcisisticCalc(number) )? `Final value ${number}, is a Narcisist`:(`Final value ${number}, is not a narcisist`)}`
                }</h5>
                <br/>
                <h1>Square Every</h1>

                <label>Integer Number: </label>
                <input type= 'number' name='numberToSquare' onKeyDown={ e => {      
                    if(e.key === 'Enter'){
                        dispatch({
                            type: SQUARE,
                            payload: e.target.value
                        })
                        console.log('procesing')
                    }
                    
                    }}></input>
                <h5>{
                    `${(numberToSquare !== squareEachNumbers(numberToSquare) )? `The Sqr each is: 
                    ${squareEachNumbers(numberToSquare)}`:`Add a Int and press Enter`}`
                }</h5>
                <br />

                <h1>Divisors</h1>
                <label>Integer Number {'>'} 1: </label>
                <input type= 'number' name='DIVISOR' onKeyDown={ e => {      
                    if(e.key === 'Enter'){
                        dispatch({
                            type: DIVISOR,
                            payload: e.target.value
                        })
                        console.log('procesing')
                    }}}>
                </input>
                <h5>{
                    `${(numberDivisor == divisorArray(numberDivisor)[0] )? `the
                    ${numberDivisor} is prime`:`divisors are ${divisorArray(numberDivisor)}`}`
                }</h5>

            </div>

            <div>
                <AgGridComponent />
            </div>

            <div style={{marginTop:'20px'}}>
                <Link to="/" >
                    <button type="button">Back</button>
                </Link>  
            </div>

        </div>
    )
}

export default Reserve