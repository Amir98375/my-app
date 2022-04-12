import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  const [counter,setCounter] = useState(1)
  const [col,setCol] = useState({
    color:'green'
  })
  return (
    <div className="App">
      <h3 style={col}>counter:{counter}</h3>
      <button onClick={()=>{
        if(counter>=10){
          setCol({color:'red'})
        }else if(counter<10){
          setCol({color:'black'})
        }
        setCounter(counter+1)}}>Add1</button>
        <button className='multiply2' onClick={()=>{
          if(counter>=10){
            setCol({color:'red'})
          }else if(counter<10){
            setCol({color:'black'})
          }
          setCounter(Math.floor(counter*2))}}>multiply2</button>
      <button className='Button' onClick={()=>{
        if(counter>=10){
          setCol({color:'red'})
        }else if(counter<10){
          setCol({color:'black'})
        }
        setCounter(counter-1)}}>sub1</button>
      <button className='double' onClick={()=>{
        if(counter>=10){
          setCol({color:'red'})
        }else if(counter<10){
          setCol({color:'black'})
        }
        setCounter(Math.floor(counter/2))}}>Divide2</button>
    </div>
  );
}

export default App;
