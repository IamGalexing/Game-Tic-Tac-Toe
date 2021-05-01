import Cell from '../Cell';
import PropTypes from 'prop-types';
import './board.css';

const Board = ({ cellValues, winningCombination, cellClicked }) => {
  const cells = cellValues.map((value, index) => {
    const canHighlight =
      winningCombination && winningCombination.indexOf(index) >= 0;

    return (
      <Cell
        value={value}
        canHignlight={canHighlight}
        key={index}
        onClick={() => cellClicked(index)}
      />
    );
  });

  return <div id="board">{cells}</div>;
};

Board.propTypes = {
  cellValues: PropTypes.array.isRequired,
  winningCombination: PropTypes.array.isRequired,
  cellClicked: PropTypes.func.isRequired,
};

export default Board;
