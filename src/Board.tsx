import React from 'react';
import Square from './Square';
import { useDispatch, useSelector } from 'react-redux';
import { movePiece } from './store';

interface BoardProps {
  board: { piece: string }[][];
  onMovePiece: (x: number, y: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, onMovePiece }) => {
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state: { currentPlayer: string }) => state.currentPlayer);

  const handleClick = (x: number, y: number) => {
    const selectedPiece = board[y][x].piece;
    if (selectedPiece === 'king' && (currentPlayer === 'player1' && y >= 6 || currentPlayer === 'player2' && y <= 2)) {
      alert("The king cannot enter the opponent's territory!");
      return;
    }
    dispatch(movePiece({ x, y }, undefined));
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
