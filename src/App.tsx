import { useState, ReactNode, Fragment } from 'react';

import Road from './components/blocks/Road';
import Wall from './components/blocks/Wall';
import Start from './components/blocks/Start';
import End from './components/blocks/End';
import Error from './components/blocks/Error';
import GameOver from './components/GameOver';
import GameFinished from './components/GameFinished';
import ResetLevel from './components/ResetLevel';
import Lives from './components/Lives';
import mapLayout from './maps';

import './App.scss';

const initials = {
  lives: 5,
  map: 0,
  time: 0,
  isHit: false,
  isStarted: false,
  isFinished: false,
  isGameOver: false,
};

function App() {
  const [lives, setLives] = useState(initials.lives);
  const [map, setMap] = useState(initials.map);
  const [time, setTime] = useState(initials.time);
  const [isStarted, setIsStarted] = useState(initials.isStarted);
  const [isFinished, setisFinished] = useState(initials.isFinished);
  const [isHit, setIsHit] = useState(initials.isHit);
  const [isGameOver, setIsGameOver] = useState(initials.isGameOver);

  const startLevelHandler = () => {
    setTime(Date.now());
    setIsStarted(true);
  };

  const stopLevelHandler = () => {
    if (!isStarted) return;
    if (lives > 1) {
      setIsHit(true);
      setLives((prevS) => prevS - 1);
      return;
    }
    setIsGameOver(true);
  };

  const finishLevelHandler = () => {
    if (!isStarted) return;
    setisFinished(true);
  };

  const resetGame = () => {
    resetLevel();
    setLives(initials.lives);
    setMap(initials.map);
    setIsGameOver(initials.isGameOver);
  };

  const resetLevel = () => {
    setIsHit(initials.isHit);
    setIsStarted(initials.isStarted);
    setisFinished(initials.isFinished);
  };

  const setNextMap = () => {
    if (!isFinished) return;
    if (map === mapLayout.length - 1) {
      setMap(0);
      resetLevel();
      return;
    }
    setMap((prevS) => prevS + 1);
    resetLevel();
  };

  const buildingBlocks: Record<number, ReactNode> = {
    0: <Road />,
    1: <Wall onOver={stopLevelHandler} />,
    2: <Start onStart={startLevelHandler} isStarted={isStarted} />,
    3: <End onEnd={finishLevelHandler} isStarted={isStarted} />,
    4: <Wall fake />,
  };

  return (
    <Fragment>
      <h1 data-version="ALPHA V0.15.5">
        oktaani<strong>GAME</strong>
      </h1>
      <div
        className="app"
        data-map={map}
        data-instructions="Try to navigate through the maze and find an exit."
      >
        <Lives livesCount={lives} />
        {isStarted && isGameOver && <GameOver onReset={resetGame} />}
        {isStarted && isHit && <ResetLevel onReset={resetLevel} />}
        {isStarted && isFinished && (
          <GameFinished onNextMap={setNextMap} time={time} />
        )}
        {mapLayout[map].map((row) =>
          row.map((cell, index) => (
            <Fragment key={index}>{buildingBlocks[cell] || <Error />}</Fragment>
          ))
        )}
      </div>
    </Fragment>
  );
}

export default App;
