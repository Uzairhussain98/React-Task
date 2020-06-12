import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Room() {
  const [islit, setlit] = React.useState(false);
  const [temp , settemp] = React.useState(22)
  const brightness = islit ? "lit" : "dark";

  return (
   <div className={`room ${brightness}`}> Room Is {islit ? 'LIT' : 'DARK' }
   <br/>
   <br/>
   Temperature is {temp}
  <br/>
  <button onClick={() =>  setlit(true)}>On</button>
  <button onClick={() =>  setlit(false)}>Off</button>
  <br/>
  <button onClick={() =>  settemp(temp+1)}>+Increase</button>
  <button onClick={() =>  settemp(temp-1)}>Decrease</button>


  
  </div>  

  );

}

ReactDOM.render( 
  <Room/>,
  document.getElementById('root')

);
