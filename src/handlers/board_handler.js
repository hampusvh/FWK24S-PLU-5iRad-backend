export const boardHandler = (io, socket) => {
    const dropToken = (payload) => {
        console.log("dropToken catched")
    }

    socket.on("board:drop", dropToken);
}
