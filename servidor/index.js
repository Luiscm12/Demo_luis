"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Hola desde restaurante');
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map
