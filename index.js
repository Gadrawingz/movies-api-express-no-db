const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4002;

// Start the server
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});