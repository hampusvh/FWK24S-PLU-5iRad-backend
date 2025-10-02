import { boards, gomokuAddPlayer, gomokuCreateGame, gomokuFillTile, gomokuGetGame, gomokuGetTiles } from "../domains/gomoku.js";
import { boardHandler } from "../handlers/board_handler.js";
import io from "../server.js";

export const addToken = (req, res) => {
    try {
        const { gameId, row, column, token } = req.body;
        const { id } = req.user;

        const data = gomokuFillTile(gameId, row, column, token, id);

        io.emit("board:dropComplete", {
            gameId: gameId,
            playerId: id,
            row: row,
            column: column,
            token: token,
            tiles: data.tiles,
            winner: data.winner,
        });

        res.status(200).json({
            status: "OK",
            message: `Token placed at row ${row}, column ${column} for game ${gameId}`,
            data: data
        });
    } catch (error) {
        console.error("Could not add_token in Gomoku:", error);
        res.status(503).json({
            status: "ERROR",
            message: "Service unavailable",
        });
    }
}

export const createGame = (req, res) => {
    try {
        const game = gomokuCreateGame();

        res.status(200).json({
            status: "OK",
            message: `Created new game with ID ${game.gameId}`,
            gameId: game.gameId
        });
    } catch (error) {
        console.error("Could not create_game in Gomoku:", error);
        res.status(503).json({
            status: "ERROR",
            message: "Service unavailable",
        });
    }
}

export const addPlayer = (req, res) => {
    try {
        const { gameId } = req.body;
        const { id } = req.user;

        if(!gameId) {
            return res.status(400).json({
                message: "gameId query parameter is missing."
            });
        }

        const board = boards.find(b => b.gameId === gameId);
        if(!board) {
            return res.status(400).json({
                message: `Game with ID ${gameId} does not exist.`
            });
        }

        gomokuAddPlayer(gameId, id);

        res.status(200).json({
            status: "OK",
            message: `Added player ${id} to game ${gameId}`,
            gameId: gameId,
            playerId: id
        });
    } catch (error) {
        console.error("Could not add_player in Gomoku:", error);
        res.status(503).json({
            status: "ERROR",
            message: "Service unavailable",
        });
    }
}

export const getTiles = (req, res) => {
    try {
        const { gameId } = req.query;

        if(!gameId) {
            return res.status(400).json({
                message: "gameId query parameter is missing."
            });
        }

        const tiles = gomokuGetTiles(gameId);

        if((!tiles || (tiles && tiles.length < 1))) {
            return res.status(404).json({
                message: "Tiles not found. This should not happen."
            });
        }

        res.status(200).json({
            status: "OK",
            tiles: tiles
        });
    } catch (error) {
        console.error("Could not get_tiles in Gomoku:", error);
        res.status(503).json({
            status: "ERROR",
            message: "Service unavailable",
        });
    }
}

export const getGame = (req, res) => {
    try {
        const { gameId } = req.query;
        const { id } = req.user;

        if(!gameId) {
            return res.status(400).json({
                message: "gameId query parameter is missing."
            });
        }

        const game = gomokuGetGame(gameId, id);

        if((!game || (game && game.length < 1)) || (game && (gameId != game.gameId))) {
            return res.status(404).json({
                message: "Game session not found."
            });
        }

        res.status(200).json({
            status: "OK",
            data: game
        });
    } catch (error) {
        console.error("Could not get_tiles in Gomoku:", error);
        res.status(503).json({
            status: "ERROR",
            message: "Service unavailable",
        });
    }
}