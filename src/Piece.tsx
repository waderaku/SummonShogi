import React from 'react';

const Piece = ({ piece, position, onMove, onPlace }) => {
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
