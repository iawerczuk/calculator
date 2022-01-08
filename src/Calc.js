import React, { useState } from 'react';


function Calc() { 
    const[calc, setCalc]= useState("");
    const[result, setResult]=useState("");

    const operators =['+', '-', '*', '/', '.']

    const updateResult= value => {
        if(
            operators.includes(value) && calc ==='' ||
            operators.includes(value) && operators.includes(calc.slice(-1) 
        )
       ) { return;
    }
    setCalc(calc+value);

    if (!operators.includes(value)) {
        setResult(eval(calc+value).toString())
    }
}

    const createNumbers= () => {
        const numbers=[];

        for (let i=1; i<10; i++) {
            numbers.push(
                <button onClick={() => updateResult(i.toString())
                } key={i} >{i}
                </button>
            )
        }
        return numbers;
    }
     const calculate= () => {
         setCalc(eval(calc).toString());
     }

     const deleteInput=() => {
         if (calc == '') {
             return;
         }
         const value=calc.slice(0, -1);
         setCalc(value);
     }
    return (
        <div className='calc-app'>
            <div className='calc'>
                <div className='display'>
                    {result? <span>{result}</span> : ''}
                    {calc || '0'}
                </div>
                <div className="operators">
                    <button onClick={() => updateResult('+')}>+</button>
                    <button onClick={() => updateResult('-')}>-</button>
                    <button onClick={() => updateResult('*')}>*</button>
                    <button onClick={() => updateResult('/')}>/</button>
                    <button onClick={calculate}>=</button>
                    <button onClick={deleteInput}>del</button>
                </div>
                <div className="numbers">
                    {createNumbers()}
                    <button onClick={() => updateResult('0')}>0</button>
                    <button onClick={() => updateResult('.')}>.</button>
                </div>

            </div>
        </div>
    )
}

export default Calc;
