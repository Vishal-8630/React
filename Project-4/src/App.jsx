import React from 'react';
import Die from './Die';
import Confetti from 'react-confetti';

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const firstValue = dice[0].value;
    const allHeld = dice.every(die => die.held);
    const allSameNumber = dice.every(die => die.value === firstValue);

    if(allHeld && allSameNumber)
      setTenzies(true);

  }, [dice]);

  function randomDieValue() {
    return Math.ceil(Math.random() * 6);
  }

  function allNewDice() {
    const newArray = [];
    for(let i = 0; i<10; i++) {
      const newDie = {
        value: randomDieValue(),
        held: false,
        id: i + 1
      }
      newArray.push(newDie);
    }
    return newArray;
  }

  const holdDice = (id) => {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? { ...die, held: !die.held } : die
    }));
  }

  const diceElement = dice.map(die => (
    <Die key={die.id} {...die}  holdDice={ () => holdDice(die.id) }/>
  ));

  function rollUnheldDice() {
    if(!tenzies) {
      setDice(oldDice => oldDice.map((die, i) => 
        die.held ? 
          die : { value: randomDieValue(), held: false, id: i + 1}
      ))
    } else {
      setDice(allNewDice());
      setTenzies(false);
    }
  }

  return (
    <div className='container'>
      {tenzies && <Confetti />}
      <header className='header'>
        <h1>Tanzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </header>
      <main className="main">
        {diceElement}
      </main>
      <div className="button">
        <button onClick={rollUnheldDice}>{ tenzies ? "New Game" : "Roll"  }</button>
      </div>
    </div>
  )
}

export default App
