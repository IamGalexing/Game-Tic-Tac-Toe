import './resultmodal.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ResultModal = ({ isGameOver, winner, startNewGameclicked }) => {
  const handleModal = classNames({
    'open-modal': isGameOver,
  });

  const message = winner ? `Winner is ${winner}` : 'It is a tie';

  return (
    <div id="modal-overlay" className={handleModal}>
      <div id="game-result-modal">
        <div id="result-container">
          <div id="winner-container">
            <span>{message}</span>
          </div>
        </div>
        <div id="new-game-container">
          <button id="new-game-button" onClick={startNewGameclicked}>
            Start New Game
          </button>
        </div>
      </div>
    </div>
  );
};

ResultModal.propTypes = {
  isGameOver: PropTypes.bool.isRequired,
  winner: PropTypes.oneOf([undefined, 'X', 'O']),
  startNewGameclicked: PropTypes.func.isRequired,
};

export default ResultModal;
