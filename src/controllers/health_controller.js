export const get_health = (req, res) => {
  try {
    const healthCheck = {
      status: "OK",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };

    res.status(200).json(healthCheck);
  } catch (error) {
    console.error("Health check error:", error);
    res.status(503).json({
      status: "ERROR",
      message: "Service unavailable",
    });
  }
}
