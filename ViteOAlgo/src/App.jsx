import { useState } from 'react'

let board = 
[null,null,null,null,null]
[null,null,null,null,null]
[null,null,null,null,null]
[null,null,null,null,null]
[null,null,null,null,null]

let locate = 0;
let clickCount = 0;
let gameOver = false; 
let treasureLocation = (0,0);

function correr(){
  clickCount += 1;
}
function foundTreausre(){
  {let locate = Math.floor(Math.random(1,26))}
  console.log(locate)
}

function App() {
  
  return (
    <>
  <div >
    {foundTreausre()}
       <div className="cuadro">
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
        <div className="coso" onClick={correr}>□</div>
       </div>
      </div>
    </>
  )
}

export default App
