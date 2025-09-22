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

export const checkWinner = (gameId, startRow, startColumn) => {
    const board = boards.find(b => b.gameId === gameId);

    let tileToken = board.tiles[startRow][startColumn]; // contains the current marker for the player who has occupied that tile
    let rowScore = 1;
    let columnScore = 1;
    let diagonalScore = 1;

    for(let i = 1; i < 5; i++) {
        // check horizontally
        if(board.tiles[startRow][startColumn+i] && board.tiles[startRow][startColumn+i] == tileToken) {
            rowScore++;
        }

        if(board.tiles[startRow][startColumn-i] && board.tiles[startRow][startColumn-i] == tileToken) {
            rowScore++;
        }

        // check vertically
        if(board.tiles[startRow+i] && board.tiles[startRow+i][startColumn] == tileToken) {
            columnScore++;
        }

        if(board.tiles[startRow-i] && board.tiles[startRow-i][startColumn] == tileToken) {
            columnScore++;
        }

        // check diagonally
        if((board.tiles[startRow-i] && board.tiles[startRow-i][startColumn-i]) && board.tiles[startRow-i][startColumn-i] == tileToken) {
            diagonalScore++;
        }

        if((board.tiles[startRow+i] && board.tiles[startRow+i][startColumn+i]) && board.tiles[startRow+i][startColumn+i] == tileToken) {
            diagonalScore++;
        }
    }

    if(rowScore >= 5) {
        console.log(`Player with the token ${tileToken} has won (horizontally)!`);
        return;
    }

    if(columnScore >= 5) {
        console.log(`Player with the token ${tileToken} has won (vertically)!`);
        return;
    }

    if(diagonalScore >= 5) {
        console.log(`Player with the token ${tileToken} has won (diagonally)!`);
        return;
    }

    console.log("No winner yet!");
}