import './App.css'
import Scores from './components/Scores'
import Cards from './components/cards/Cards';
import { characters } from './data/characters';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [shuffledCharacters, setShuffledCharacters] = useState([...characters]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    // Shuffle the characters array when the component mounts or when the score changes
    shuffleCharacters();
  }, [score]);

  const shuffleCharacters = () => {
    const shuffled = [...characters];
    shuffled.sort(() => Math.random() - 0.5);
    setShuffledCharacters(shuffled);
  };

  const handleCardClick = (charId) => {
    if (clickedCards.includes(charId)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore(prevScore => prevScore + 1);
      setClickedCards(prevClickedCards => [...prevClickedCards, charId]);
    }
    if (score > bestScore) {
      setBestScore(score + 1);
    }

  };


  return (
    <>
      <div className=' pb-6 flex items-center justify-between'>
        <h1 className='text-6xl italic font-bold font-mono p-2'>Anime Memory Game</h1>
        <Scores score={score} bestScore={bestScore} />
      </div>
      <div className=" gap-x-10 gap-y-10 card-container h-full grid grid-cols-4 grid-rows-2">
        {shuffledCharacters.map(char => {
          return <div onClick={() => handleCardClick(char.id)} key={char.id} >
            <Cards className={`card`} key={char.id} title={char.name} img={char.imgUrl} />
          </div>
        })}
      </div>
    </>
  )
}

export default App
