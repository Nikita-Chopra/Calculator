import React, { useState } from 'react'
import "../components/calci.css"

export default function Calculator() {
const [result, setResult] = useState('')

const handleClick =(e) =>{
setResult(result.concat(e.target.name))
}

const backSpace =() =>{
    setResult(result.slice(0, -1))
}

const Clear =() =>{
    setResult('')
}

const Calculate =()=>{
    setResult(eval(result).toString())
}




  return (
    <div className='main'>
      <div className='a'>
      <div className='a6'>
        <input type="text" placeholder='' className='text1' value={result}></input>
      </div>
        <div className='a1'>
            <button className='btn1' onClick={Clear}>Clear</button>
            <button className='btn2' onClick={backSpace}>C</button>
            <button name= "/" onClick={handleClick} className='btn2'>/</button>
        </div>
        <div className='a2'>
            <button name= "7" onClick={handleClick}  className='btn3'>7</button>
            <button name= "8"  onClick={handleClick}  className='btn3'>8</button>
            <button  name= "9"  onClick={handleClick} className='btn3'>9</button>
            <button  name= "*"  onClick={handleClick} className='btn3'>*</button>
        </div>
        <div className='a3'>
            <button  name= "4" onClick={handleClick}  className='btn3'>4</button>
            <button  name= "5"  onClick={handleClick} className='btn3'>5</button>
            <button  name= "6"  onClick={handleClick} className='btn3'>6</button>
            <button  name= "-"  onClick={handleClick} className='btn2'>-</button>
        </div>
        <div className='a4'>
            <button  name= "1"  onClick={handleClick} className='btn3'>1</button>
            <button  name= "2"  onClick={handleClick} className='btn3'>2</button>
            <button  name= "3"  onClick={handleClick} className='btn3'>3</button>
            <button  name= "+"  onClick={handleClick} className='btn3'>+</button>
        </div>
        <div className='a5'>
            <button  name= "0"  onClick={handleClick} className='btn3'>0</button>
            <button  name= "."  onClick={handleClick} className='btn3'>.</button>
            <button  className='btn1' onClick={Calculate}>=</button>
        </div>
      </div>
    </div>
  )
}
