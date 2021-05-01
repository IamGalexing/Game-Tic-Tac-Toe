import winningMatrix from './WinningMatrix';

const calculateWinner = (cellValues, netEmptyCellsLeft, index) => {
  const winningRanges = winningMatrix[index];

  for (let i = 0; i < winningRanges.length; i++) {
    const currentValue = cellValues[index];
    const firstOption = cellValues[winningRanges[i][0]];
    const secondOption = cellValues[winningRanges[i][1]];

    if (currentValue === firstOption && currentValue === secondOption) {
      return {
        hasResult: true,
        winner: currentValue,
        winningCombination: [index, winningRanges[i][0], winningRanges[i][1]],
      };
    }
  }

  if (netEmptyCellsLeft === 0) {
    return {
      hasResult: true,
      winner: undefined,
      winningCombination: [],
    };
  }

  return {
    hasResult: false,
    winner: undefined,
    winningCombination: [],
  };
};

export default calculateWinner;
