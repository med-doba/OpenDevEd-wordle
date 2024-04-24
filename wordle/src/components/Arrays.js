import React, { useEffect } from 'react'
import Keyboard from './Keyboard';
import GameLogic from '../utils/GameLogic';
import Row from './Row';
import Alerts from './Alert';

function Arrays( {target}) {

    const   { gameState, handleKeyUp } = GameLogic(target);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
        return () =>  window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    useEffect(() => {
        if (gameState.result || gameState.attempts > 5) {
            var timeoutId = setTimeout(() => {
                window.location.reload();
              }, 4000);
        }
        return () => clearTimeout(timeoutId);
    }, [gameState.result, gameState.attempts]);


    return (
        <div className='flex flex-col items-center'>
            <h1>Wordle - game</h1>
            {gameState.result && <Alerts target={target} status={true}/>}
            {(!gameState.result && gameState.attempts > 5) && <Alerts target={target} status={false}/>}
            {(!gameState.result && gameState.attempts <= 5) && <Row userGuess={gameState.userGuess} attempts={gameState.attempts} buffer={gameState.buffer}/>}
			{(target && (!gameState.result && gameState.attempts <= 5)) && <Keyboard buffer={gameState.buffer.toLowerCase()} target={target.toLowerCase()}/>}
        </div>
    )
}

export default Arrays;