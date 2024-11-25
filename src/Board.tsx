import React from 'react';
import Square from './Square';
import { useDispatch, useSelector } from 'react-redux';
import { movePiece } from './store';

const Board = ({ board, onMovePiece }) => {
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state) => state.currentPlayer);

  const handleClick = (x, y) => {
    const selectedPiece = board[y][x].piece;
    if (selectedPiece === 'king' && (currentPlayer === 'player1' && y >= 6 || currentPlayer === 'player2' && y <= 2)) {
      alert("The king cannot enter the opponent's territory!");
      return;
    }
    dispatch(movePiece({ x, y }));
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((square, colIndex) => (
            <Square
              key={colIndex}
              piece={square.piece}
              position={{ x: colIndex, y: rowIndex }}
              onClick={() => handleClick(colIndex, rowIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
