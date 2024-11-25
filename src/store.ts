import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Initial state
const initialState = {
  board: Array(9).fill('').map((_, rowIndex) =>
    Array(9).fill('').map((_, colIndex) => {
      if (rowIndex === 0 && colIndex === 4) {
        return { piece: 'king', position: { x: colIndex, y: rowIndex } };
      } else if (rowIndex === 8 && colIndex === 4) {
        return { piece: 'king', position: { x: colIndex, y: rowIndex } };
      } else {
        return { piece: '', position: { x: colIndex, y: rowIndex } };
      }
    })
  ),
  currentPlayer: 'player1',
  pieces: ['pawn', 'rook', 'knight', 'bishop', 'gold', 'silver', 'lance', 'king'],
};

// Action types
const MOVE_PIECE = 'MOVE_PIECE';
const PLACE_PIECE = 'PLACE_PIECE';
const SUMMON_PIECE = 'SUMMON_PIECE';
const SWITCH_PLAYER = 'SWITCH_PLAYER';

// Action creators
export const movePiece = (from: { x: number; y: number; }, to: undefined) => ({
  type: MOVE_PIECE,
  payload: { from, to },
});

export const placePiece = (piece: any, position: any) => ({
  type: PLACE_PIECE,
  payload: { piece, position },
});

export const summonPiece = (position: any) => ({
  type: SUMMON_PIECE,
  payload: { position },
});

export const switchPlayer = () => ({
  type: SWITCH_PLAYER,
});

// Reducer
const reducer = (state = initialState, action: { type: any; payload: { position?: any; from?: any; to?: any; piece?: any; }; }) => {
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
            return { ...square, piece: '' };
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
