import { useState } from 'react';

import Cell from '../Cell/Cell';

import './TicTacToe.css';

function TicTacToe() {
  const [ currentPlayer, setCurrentPlayer ] = useState(1);
  const [ board, setBoard ] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);

  const winner = detectWin(board);
  const win = Boolean(winner);
  const full = detectFull(board);

  function detectWin(board) {
    if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
      return board[0][0];
    }
    return null;
  }

  function detectFull(board) {
    return board.every(line => line.every(col => col !== null));
  }

  function handleClick(line, col) {
    if (win || board[line][col] !== null) {
      return;
    }
    const newBoard = board.map((l, i) => {
      if (i === Number(line)) {
        return l.map((c, j) => j === Number(col) ? currentPlayer : c);
      }
      return l;
    });
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  function handleRestart() {
    setCurrentPlayer(1);
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  }

  return (
    <div className="TicTacToe">
      {board.map((line, i) => (
        <div className="TicTacToe_line" key={i}>
          {line.map((col, j) => (
            <Cell
              key={j}
              onClick={handleClick}
              lineIndex={i}
              colIndex={j}
              value={col}
            />
          ))}
        </div>
      ))}
      {!win && !full && <div className="TicTacToe_line">Player: {currentPlayer}</div>}
      {win && <div className="TicTacToe_line">Player {winner} win the game</div>}
      {!win && full && <div className="TicTacToe_line">Draw</div>}
      {(win || full) && (
        <div className="TicTacToe_line">
          <button type="button" onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;