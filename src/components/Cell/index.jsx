import './cell.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cell = ({ value, canHignlight, onClick }) => {
  const cellClasses = classNames({
    cell: true,
    winner: canHignlight,
  });

  const cellContentClasses = classNames({
    'cell-content': true,
    populated: value,
  });

  return (
    <button className={cellClasses} onClick={onClick}>
      <span className={cellContentClasses}>{value}</span>
    </button>
  );
};

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  canHignlight: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cell;
