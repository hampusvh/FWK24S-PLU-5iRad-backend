import { v4 as uuidv4 } from "uuid";
export const boards = [];

const tilesTemplate = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export const createGame = () => {
    const gameObj = {
        gameId: uuidv4(),
        tiles: tilesTemplate,
        players: []
    }

    boards.push(gameObj);

    return gameObj;
}

export const fillTile = (gameId, row, column, token) => {
    const board = boards.find(b => b.gameId === gameId);

    board.tiles[row][column] = token;
}

export const addPlayer = (gameId, playerId) => {
    const board = boards.find(b => b.gameId === gameId);

    board.players.push(playerId);
}