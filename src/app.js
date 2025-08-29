const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/health', require('./routes/health_routes.js'));

app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
        path: req.originalUrl
    });
});

module.exports = app;
