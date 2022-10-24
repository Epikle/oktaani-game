import { useState, ReactNode, Fragment } from 'react';

import Road from './components/blocks/Road';
import Wall from './components/blocks/Wall';
import Start from './components/blocks/Start';
import End from './components/blocks/End';
import Error from './components/blocks/Error';
import Heart from './components/blocks/Heart';
import GameOver from './components/GameOver';
import LevelFinished from './components/LevelFinished';
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

  const addLivesHandler = () => {
    setLives((prevS) => prevS + 1);
  };

  const buildingBlocks: Record<number, ReactNode> = {
    0: <Road />,
    1: <Wall onOver={stopLevelHandler} />,
    2: <Start onStart={startLevelHandler} isStarted={isStarted} />,
    3: <End onEnd={finishLevelHandler} isStarted={isStarted} />,
    4: <Wall fake />,
    5: (
      <Heart
        isStarted={isStarted}
        onAddLives={addLivesHandler}
        isGameOver={isGameOver}
      />
    ),
    6: (
      <Wall
        onOver={stopLevelHandler}
        moving={{ direction: 'y', distance: 1, time: '1000ms', delay: '0ms' }}
      />
    ),
    7: (
      <Wall
        onOver={stopLevelHandler}
        moving={{ direction: 'y', distance: -1, time: '1000ms', delay: '0ms' }}
      />
    ),
    8: (
      <Wall
        onOver={stopLevelHandler}
        moving={{ direction: 'x', distance: 2, time: '2000ms', delay: '0ms' }}
      />
    ),
    9: (
      <Wall
        onOver={stopLevelHandler}
        moving={{ direction: 'x', distance: -1, time: '1000ms', delay: '0ms' }}
      />
    ),
    10: <Road hide />,
  };

  return (
    <Fragment>
      <h1 data-version="ALPHA V0.15.6">
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
          <LevelFinished onNextMap={setNextMap} time={time} />
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
