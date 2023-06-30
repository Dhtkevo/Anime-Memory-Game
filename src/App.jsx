import './App.css'
import Scores from './components/Scores'
import Cards from './components/cards/Cards';
import { characters } from './data/characters';

function App() {

  return (
    <>
      <div className=' pb-6 flex items-center justify-between'>
        <h1 className='text-6xl font-bold font-mono p-2'>Anime Memory Game</h1>
        <Scores />
      </div>
      <div className=" gap-x-10 gap-y-10 card-container h-full grid grid-cols-4 grid-rows-2">
        {characters.map(char => {
          return <Cards className="card" key={char.id} title={char.name} img={char.imgUrl} />
        })}
      </div>
    </>
  )
}

export default App
