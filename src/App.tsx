import { useState, ReactNode, Fragment, useEffect } from 'react';

import Road from './components/blocks/Road';
import Wall from './components/blocks/Wall';
import Start from './components/blocks/Start';
import End from './components/blocks/End';
import GameOver from './components/GameOver';
import GameFinished from './components/GameFinished';

import './App.scss';

const mapLayout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 0, 0, 1, 3, 1],
  [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function App() {
  const [isHit, setIsHit] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setisFinished] = useState(false);

  const buildingBlocks: Record<number, ReactNode> = {
    0: <Road />,
    1: <Wall onOver={() => isStarted && setIsHit(true)} />,
    2: <Start onLeave={() => setIsStarted(true)} />,
    3: <End onOver={() => setisFinished(true)} />,
  };

  const resetGame = () => {
    setIsHit(false);
    setIsStarted(false);
    setisFinished(false);
  };

  console.log('hit', isHit);
  console.log('start', isStarted);
  console.log('finish', isFinished);

  return (
    <Fragment>
      <div className="App">
        {isHit && isStarted && <GameOver onReset={resetGame} />}
        {isStarted && isFinished && <GameFinished onReset={resetGame} />}
        {mapLayout.map((row) =>
          row.map((cell, index) => (
            <div key={index}>{buildingBlocks[cell]}</div>
          ))
        )}
      </div>
    </Fragment>
  );
}

export default App;
