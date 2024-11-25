import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { summonPiece } from './store';

const Controls = ({ currentPlayer, onPlacePiece, onSummonPiece }) => {
  const dispatch = useDispatch();

  const handleSummon = (position) => {
    dispatch(summonPiece(position));
  };

  return (
    <div className="controls">
      <button
        className="summon-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleSummon({ x: 0, y: 0 })}
      >
        Summon Piece
      </button>
    </div>
  );
};

export default Controls;
