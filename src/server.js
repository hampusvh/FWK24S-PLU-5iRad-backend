import dotenv from "dotenv";
import app from "./app.js";
import { gomoku_check_winner, gomoku_create_game, gomoku_fill_tile } from "./models/gomoku_model.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);

  /*const game = gomoku_create_game();

  gomoku_fill_tile(game.gameId, 0, 0, 2);
  gomoku_fill_tile(game.gameId, 1, 1, 2);
  gomoku_fill_tile(game.gameId, 2, 2, 2);
  gomoku_fill_tile(game.gameId, 3, 3, 2);
  gomoku_fill_tile(game.gameId, 4, 4, 2);

  gomoku_check_winner(game.gameId, 1, 1);*/
});
