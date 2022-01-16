const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'prueba'
})
/*
const getMembers = async (req, res) => {
    const response = await pool.query('SELECT * FROM miembro;');
    res.end(JSON.stringify(response.rows));
}

const createMember = async (req, res) => {
    const { cedula, nombre, apellido, edad } = req.body;
    const response = await pool.query('INSERT INTO miembro (cedula, nombre, apellido, edad) VALUES ($1, $2, $3, $4)', [cedula, nombre, apellido, edad]);
}

const updateMember = async (req, res) => {
    const cedula = parseInt(req.params.cedula);
    const { nombre, apellido, edad } = req.body;

    const response =await pool.query('UPDATE miembro SET nombre = $1, apellido = $2 , edad = $3 WHERE cedula = $4', [
        nombre, apellido, edad, cedula
    ]);
};

module.exports = {
    getMembers,
    createMember,
    updateMember
}
*/