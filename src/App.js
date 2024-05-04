import { useState } from "react";

function Square() {
  const [squareNumber, setSquareNumber] = useState(null);

  function handleClick(){
    setSquareNumber('X')
  }
  return <button className="square" onClick={handleClick}>{squareNumber}</button>;
}

export default function Board(){
  return (
    <>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  )
}