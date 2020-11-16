function Cell(props) {
  const { onClick, lineIndex, colIndex, value } = props;

  function getCellValue(col) {
    if (col) {
      return col === 1 ? 'X' : 'O';
    }
    return '\xa0';
  }

  function handleClick() {
    onClick(lineIndex, colIndex);
  }

  return (
    <button
      className="TicTacToe__cell"
      type="button"
      onClick={handleClick}
    >
      {getCellValue(value)}
    </button>
  );
}

export default Cell;
