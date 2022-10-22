import { useState, ReactNode, Fragment } from 'react';

import Road from './components/blocks/Road';
import Wall from './components/blocks/Wall';
import Start from './components/blocks/Start';
import End from './components/blocks/End';
import GameOver from './components/GameOver';
import GameFinished from './components/GameFinished';

import './App.scss';

const mapLayout = [
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 0, 0, 1, 3, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
];

function App() {
  const [isHit, setIsHit] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setisFinished] = useState(false);
  const [time, setTime] = useState(Date.now());
  const [map, setMap] = useState(0);

  const buildingBlocks: Record<number, ReactNode> = {
    0: <Road />,
    1: <Wall onOver={() => isStarted && setIsHit(true)} />,
    2: (
      <Start
        onStart={() => {
          setIsStarted(true);
          setTime(Date.now());
        }}
        isStarted={isStarted}
      />
    ),
    3: (
      <End
        onEnd={() => isStarted && setisFinished(true)}
        isStarted={isStarted}
      />
    ),
  };

  const resetGame = () => {
    if (isFinished && map === mapLayout.length - 1) {
      setMap(0);
    }
    if (isFinished && map !== mapLayout.length - 1) {
      setMap((prevS) => prevS + 1);
    }

    setIsHit(false);
    setIsStarted(false);
    setisFinished(false);
  };

  return (
    <Fragment>
      <h1 data-version="ALPHA V0.15.1">
        oktaani<strong>GAME</strong>
      </h1>
      <div className="app" data-map={map}>
        {isHit && isStarted && <GameOver onReset={resetGame} />}
        {isStarted && isFinished && (
          <GameFinished onReset={resetGame} time={time} />
        )}
        {mapLayout[map].map((row) =>
          row.map((cell, index) => (
            <Fragment key={index}>{buildingBlocks[cell]}</Fragment>
          ))
        )}
      </div>
    </Fragment>
  );
}

export default App;
