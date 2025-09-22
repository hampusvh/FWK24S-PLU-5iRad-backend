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

export const gomoku_create_game = () => {
    const gameObj = {
        gameId: uuidv4(),
        tiles: tilesTemplate,
        players: []
    }

    boards.push(gameObj);

    return gameObj;
}

export const gomoku_fill_tile = (gameId, row, column, token) => {
    const board = boards.find(b => b.gameId === gameId);

    board.tiles[row][column] = token;

    return board.tiles;
}

export const gomoku_add_player = (gameId, playerId) => {
    const board = boards.find(b => b.gameId === gameId);

    board.players.push(playerId);
}

export const gomoku_check_winner = (gameId, startRow, startColumn) => {
    const board = boards.find(b => b.gameId === gameId);

    let tileToken = board.tiles[startRow][startColumn]; // contains the current marker for the player who has occupied that tile

    if(!tileToken || tileToken && tileToken <= 0) return; // cannot be null or 0 since thats empty

    let rowScore = 1;
    let columnScore = 1;
    let diagonalScore = 1;

    // possible bug: does it increment even after it finds the opponents token? if that's the case, maybe break out of the loop when we find the opponents token, or something...?
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

const gomoku_get_tiles = () => {
    const board = boards.find(b => b.gameId === gameId);

    return board.tiles;
}