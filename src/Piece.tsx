import React from 'react';

interface PieceProps {
  piece: string;
  position: string;
  onMove: (position: string) => void;
  onPlace: (piece: string, position: string) => void;
}

const Piece: React.FC<PieceProps> = ({ piece, position, onMove, onPlace }) => {
  const handleMove = () => {
    onMove(position);
  };

  const handlePlace = () => {
    onPlace(piece, position);
  };

  return (
    <div className="piece" onClick={handleMove}>
      {piece}
    </div>
  );
};

export default Piece;
