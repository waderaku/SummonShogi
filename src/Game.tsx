import React, { useState } from 'react';
import Board from './Board';
import Controls from './Controls';
import { useDispatch, useSelector } from 'react-redux';
import { movePiece, placePiece, summonPiece } from './store';

const Game = () => {
  const dispatch = useDispatch();
  const board = useSelector((state: { board: any }) => state.board);
  const currentPlayer = useSelector((state: { currentPlayer: any }) => state.currentPlayer);

  const handleMovePiece = (x: number, y: number) => {
    dispatch(movePiece({ x, y }, undefined));
  };

  const handlePlacePiece = (piece: any, position: any) => {
    dispatch(placePiece(piece, position));
  };

  const handleSummonPiece = (position: any) => {
    dispatch(summonPiece(position));
  };

  return (
    <div className="game">
      <Board board={board} onMovePiece={handleMovePiece} />
      <Controls
      />
    </div>
  );
};

export default Game;
