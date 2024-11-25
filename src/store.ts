import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Initial state
const initialState = {
  board: Array(9).fill(Array(9).fill({ piece: null, position: null })),
  currentPlayer: 'player1',
  pieces: ['pawn', 'rook', 'knight', 'bishop', 'gold', 'silver', 'lance', 'king'],
};

// Action types
const MOVE_PIECE = 'MOVE_PIECE';
const PLACE_PIECE = 'PLACE_PIECE';
const SUMMON_PIECE = 'SUMMON_PIECE';
const SWITCH_PLAYER = 'SWITCH_PLAYER';

// Action creators
export const movePiece = (from, to) => ({
  type: MOVE_PIECE,
  payload: { from, to },
});

export const placePiece = (piece, position) => ({
  type: PLACE_PIECE,
  payload: { piece, position },
});

export const summonPiece = (position) => ({
  type: SUMMON_PIECE,
  payload: { position },
});

export const switchPlayer = () => ({
  type: SWITCH_PLAYER,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_PIECE:
      // Logic for moving a piece
      const { from, to } = action.payload;
      const pieceToMove = state.board[from.y][from.x].piece;
      if (pieceToMove === 'king' && (state.currentPlayer === 'player1' && to.y >= 6 || state.currentPlayer === 'player2' && to.y <= 2)) {
        alert("The king cannot enter the opponent's territory!");
        return state;
      }
      const updatedBoard = state.board.map((row, rowIndex) =>
        row.map((square, colIndex) => {
          if (rowIndex === from.y && colIndex === from.x) {
            return { ...square, piece: null };
          }
          if (rowIndex === to.y && colIndex === to.x) {
            return { ...square, piece: pieceToMove };
          }
          return square;
        })
      );
      return { ...state, board: updatedBoard };
    case PLACE_PIECE:
      // Logic for placing a piece
      const { piece, position } = action.payload;
      const newBoardForPlacement = state.board.map((row, rowIndex) =>
        row.map((square, colIndex) => {
          if (rowIndex === position.y && colIndex === position.x) {
            return { ...square, piece };
          }
          return square;
        })
      );
      return { ...state, board: newBoardForPlacement };
    case SUMMON_PIECE:
      // Logic for summoning a piece
      const randomPiece = state.pieces[Math.floor(Math.random() * (state.pieces.length - 1))];
      const newBoardForSummoning = state.board.map((row, rowIndex) =>
        row.map((square, colIndex) => {
          if (rowIndex === action.payload.position.y && colIndex === action.payload.position.x) {
            return { ...square, piece: randomPiece };
          }
          return square;
        })
      );
      return { ...state, board: newBoardForSummoning };
    case SWITCH_PLAYER:
      // Logic for switching player
      return { ...state, currentPlayer: state.currentPlayer === 'player1' ? 'player2' : 'player1' };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
