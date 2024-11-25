# SummonShogi

## Game Rules

- The board and pieces used are the same as in traditional Shogi.
- However, the initial board setup only includes the kings for both players.
- Players can perform the following actions:
  - Move a piece
  - Place a captured piece
  - Summon a piece
- When summoning a piece, a random piece (excluding the king) is placed on a specified position on the board.
- Entering the opponent's territory (the last three rows) with your king is prohibited.

## Technologies Used

- React
- Typescript
- Tailwind

## Running the Project

1. Clone the repository:
   ```
   git clone https://github.com/waderaku/SummonShogi.git
   ```
2. Navigate to the project directory:
   ```
   cd SummonShogi
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000` to see the game.

## Summoning Mechanic

In Summon Shogi, players have the ability to summon pieces onto the board. The summoning mechanic works as follows:

- Players can summon a piece by clicking the "Summon Piece" button in the controls section.
- When a piece is summoned, a random piece (excluding the king) is selected and placed on a specified position on the board.
- The summoning action is handled by the `summonPiece` function in the `Controls` component, which dispatches the summoning action to the Redux store.
- The `Board` component handles the state changes related to summoning and re-renders correctly when a piece is summoned.
- The `Piece` component includes logic to handle the display of newly summoned pieces.
- Tailwind is used to style the summoning button and any visual feedback related to the summoning mechanic.
