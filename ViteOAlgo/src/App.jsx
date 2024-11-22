import { useState } from 'react'

let board = 
[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]

let locate;
let clickCount = 0;
let gameOver = false; 
let treasureLocation = null;
let celda

function correr(){
  clickCount += 1;
  
  }


function buscar(){
  locate = Math.floor(Math.random()*24)
  console.log(locate)
  if (board[locate]){

}
}

function App() {
  
  return (
    <>
  <div >
    <h1>Encuentra el tesoro</h1>
    {buscar()}
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
