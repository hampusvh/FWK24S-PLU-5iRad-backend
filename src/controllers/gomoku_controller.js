export function add_token(req, res) {
  try {
    const { gameId, row, column } = req.body;
    const user = req.user; // kommer innehålla användarobjektet för inloggade användaren

    //mer logik här sen

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
