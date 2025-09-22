import { gomoku_add_player, gomoku_create_game, gomoku_fill_tile } from "../models/gomoku_model.js";

// todo: require Authorization header 
export const add_token = (req, res) => {
    try {
        const { gameId, row, column } = req.body;
        const user = req.user; // kommer innehålla användarobjektet för inloggade användaren

        //mer logik här sen
        const tiles = gomoku_fill_tile(gameId, row, column, 1);

        res.status(200).json({
            status: "OK",
            message: `Token placed at row ${row}, column ${column} for game ${gameId}`,
            tiles: tiles
        });
    } catch (error) {
        console.error("Could not add_token in Gomoku:", error);
        res.status(503).json({
            status: "ERROR",
            message: "Service unavailable",
        });
    }
}

export const create_game = (req, res) => {
    try {
        const game = gomoku_create_game();

        res.status(200).json({
            status: "OK",
            message: `Created new game with ID ${game.gameId}`
        });
    } catch (error) {
        console.error("Could not create_game in Gomoku:", error);
        res.status(503).json({
            status: "ERROR",
            message: "Service unavailable",
        });
    }
}

export const add_player = (req, res) => {
    try {
        const { gameId } = req.body;
        const { user } = req.user; // kommer innehålla användarobjektet för inloggade användaren

        gomoku_add_player(gameId, user.id);

        res.status(200).json({
            status: "OK",
            message: `Added player ${user.id} to game ${game.gameId}`,
            user,
        });
    } catch (error) {
        console.error("Could not add_player in Gomoku:", error);
        res.status(503).json({
            status: "ERROR",
            message: "Service unavailable",
        });
    }
}