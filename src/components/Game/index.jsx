import { useState } from 'react';
import calculateWinner from '../../utils/CalculateWinner';
import Board from '../Board';
import ResultModal from '../ResultModal';
import './game.css';

const Game = () => {
  const [cellValues, setCellValues] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [emptyCellsLeft, setEmptyCellsLeft] = useState(9);
  const [winner, setWinner] = useState();
  const [winningCombination, setWinningCombination] = useState([]);

  const onNewGame = () => {
    setCellValues(['', '', '', '', '', '', '', '', '']);
    setXIsNext(true);
    setIsGameOver(false);
    setEmptyCellsLeft(9);
    setWinner(undefined);
    setWinningCombination([]);
  };

  const isCellEmpty = index => cellValues[index] === '';

  const onCellClicked = index => {
    if (isCellEmpty(index)) {
      const newCellValues = [...cellValues];
      newCellValues[index] = xIsNext ? 'X' : 'O';

      const netEmptyCellsLeft = emptyCellsLeft - 1;

      const calcResult = calculateWinner(
        newCellValues,
        netEmptyCellsLeft,
        index,
      );

      setCellValues(newCellValues);
      setXIsNext(!xIsNext);
      setIsGameOver(calcResult.hasResult);
      setEmptyCellsLeft(netEmptyCellsLeft);
      setWinner(calcResult.winner);
      setWinningCombination(calcResult.winningCombination);
    }
  };

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellClicked={onCellClicked}
          cellValues={cellValues}
          winningCombination={winningCombination}
        />
      </div>
      <ResultModal
        isGameOver={isGameOver}
        winner={winner}
        startNewGameclicked={onNewGame}
      />
    </>
  );
};

export default Game;
