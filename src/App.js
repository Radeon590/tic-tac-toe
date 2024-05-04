function Square({squareNumber}) {
  return <button className="square">{squareNumber}</button>;
}

export default function Board(){
  return (
    <>
      <div className="board-row">
        <Square squareNumber={1}/>
        <Square squareNumber={2}/>
        <Square squareNumber={3}/>
      </div>
      <div className="board-row">
        <Square squareNumber={4}/>
        <Square squareNumber={5}/>
        <Square squareNumber={6}/>
      </div>
      <div className="board-row">
        <Square squareNumber={7}/>
        <Square squareNumber={8}/>
        <Square squareNumber={9}/>
      </div>
    </>
  )
}