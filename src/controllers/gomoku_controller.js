import { addPlayer, createGame, fillTile } from "../models/gomoku_model";

export const add_token = (req, res) => {
    try {
        const { boardId, row, column } = req.body;
        const user = req.user; // kommer innehålla användarobjektet för inloggade användaren

        //mer logik här sen
        fillTile(boardId, row, column, 1);

        res.status(200).json({
            status: "OK",
            message: `Token placed at row ${row}, column ${column} for game ${gameId}`,
            user,
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
        const game = createGame();

        res.status(200).json({
            status: "OK",
            message: `Created new game with ID ${game.gameId}`,
            user,
        });
    } catch (error) {
        console.error("Could not add_token in Gomoku:", error);
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

        addPlayer(gameId, user.id);

        res.status(200).json({
            status: "OK",
            message: `Added player ${user.id} to game ${game.gameId}`,
            user,
        });
    } catch (error) {
        console.error("Could not add_token in Gomoku:", error);
        res.status(503).json({
            status: "ERROR",
            message: "Service unavailable",
        });
    }
}