import express = require('express');
import type { Request, Response } from 'express';
import pg = require('pg');
const { Pool } = pg;

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.json()); 


const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});


app.get('/api/datos', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM platillos');
        res.json(result.rows);
    } catch (error) {
        console.error('Error en la base de datos:', error);
        res.status(500).send('Error interno del servidor');
    }
});


app.post('/api/reservaciones', async (req: Request, res: Response) => {
    const { nombre, correo, personas } = req.body;
    
    try {
       
        const query = 'INSERT INTO reservaciones (nombre, correo, personas) VALUES ($1, $2, $3) RETURNING *';
        const values = [nombre, correo, personas];
        const result = await pool.query(query, values);
        
        res.status(201).json({ mensaje: 'Reservación guardada', registro: result.rows[0] });
    } catch (error) {
        console.error('Error al guardar reservación:', error);
        res.status(500).send('Error interno del servidor');
    }
});


app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});