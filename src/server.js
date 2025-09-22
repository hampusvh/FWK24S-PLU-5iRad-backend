import dotenv from "dotenv";
import app from "./app.js";
import { checkWinner, createGame, fillTile } from "./models/gomoku_model.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);

  const game = createGame();
  
  fillTile(game.gameId, 0, 0, 2);
  fillTile(game.gameId, 1, 1, 2);
  fillTile(game.gameId, 2, 2, 2);
  fillTile(game.gameId, 3, 3, 2);
  fillTile(game.gameId, 4, 4, 2);

  checkWinner(game.gameId, 1, 1);
});
