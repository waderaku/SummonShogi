import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ piece, position, onClick }) => {
  return (
    <div
      className="border w-12 h-12 flex items-center justify-center p-2 bg-gray-200"
      onClick={onClick}
    >
      {piece}
    </div>
  );
};

Square.propTypes = {
  piece: PropTypes.string,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Square;
