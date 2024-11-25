import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { summonPiece } from './store';

interface ControlsProps {
  onSummonPiece: (position: { x: number; y: number }) => void;
}

const Controls: React.FC<ControlsProps> = ({ onSummonPiece }) => {
  const dispatch = useDispatch();

  interface Position {
    x: number;
    y: number;
  }

  return (
    <div className="controls">
      <button
        className="summon-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onSummonPiece({ x: 0, y: 0 })}
      >
        Summon Piece
      </button>
    </div>
  );
};

export default Controls;
