import React, { useState } from 'react';
import Board from './Board';
import Controls from './Controls';
import { useDispatch, useSelector } from 'react-redux';
import { movePiece, placePiece, summonPiece } from './store';

const Game = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const currentPlayer = useSelector((state) => state.currentPlayer);

  const handleMovePiece = (from, to) => {
    dispatch(movePiece(from, to));
  };

  const handlePlacePiece = (piece, position) => {
    dispatch(placePiece(piece, position));
  };

  const handleSummonPiece = (position) => {
    dispatch(summonPiece(position));
  };

  return (
    <div className="game">
      <Board board={board} onMovePiece={handleMovePiece} />
      <Controls
        currentPlayer={currentPlayer}
        onPlacePiece={handlePlacePiece}
        onSummonPiece={handleSummonPiece}
      />
    </div>
  );
};

export default Game;
