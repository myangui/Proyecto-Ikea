const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'amy_ikea_proyecto'
})

//Gets
const getInfoTiendas = async (req, res) => {
    const response = await pool.query('SELECT * FROM ((AMY_Tienda INNER JOIN AMY_Region ON AMY_Tienda.Region_id_region = AMY_Region.id_region)INNER JOIN AMY_Horario ON AMY_Tienda.Region_id_region = AMY_Horario.Region_id_region);');
    res.end(JSON.stringify(response.rows));
}
const getInfoProductos = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Producto INNER JOIN AMY_Catalogo ON AMY_Producto.Catalogo_id_catalogo = AMY_Catalogo.id_catalogo INNER JOIN AMY_Region ON AMY_Catalogo.Region_id_region = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoCategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Categoria INNER JOIN AMY_P_C ON AMY_Categoria.id_categoria = AMY_P_C.categoria_id_categoria INNER JOIN AMY_Producto ON AMY_P_C.producto_id_producto = AMY_Producto.id_producto INNER JOIN AMY_Catalogo ON AMY_Producto.Catalogo_id_catalogo = AMY_Catalogo.id_catalogo INNER JOIN AMY_Region ON AMY_Catalogo.Region_id_region = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoTodasCategorias = async (req, res) => {
    const response = await pool.query('SELECT * FROM AMY_Categoria;');
    res.end(JSON.stringify(response.rows));
}
const getInfoOfertas = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Descuento INNER JOIN AMY_D_C ON AMY_Descuento.id_descuento = AMY_D_C.Descuento_id_descuento INNER JOIN AMY_Categoria ON AMY_Categoria.id_categoria = AMY_D_C.categoria_id_categoria INNER JOIN AMY_P_C ON AMY_Categoria.id_categoria = AMY_P_C.categoria_id_categoria INNER JOIN AMY_Producto ON AMY_P_C.producto_id_producto = AMY_Producto.id_producto INNER JOIN AMY_Catalogo ON AMY_Producto.Catalogo_id_catalogo = AMY_Catalogo.id_catalogo INNER JOIN AMY_Region ON AMY_Catalogo.Region_id_region = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoEventos = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Evento INNER JOIN AMY_Tienda ON AMY_Evento.Tienda_id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoMenu = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Menu_mes INNER JOIN AMY_Tienda ON AMY_Menu_mes.Tienda_id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoFacturas = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Factura INNER JOIN AMY_caja ON AMY_Factura.caja_id_caja = AMY_caja.id_caja INNER JOIN AMY_Tienda ON AMY_caja.Tienda_id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoTienda = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Tienda WHERE AMY_Tienda.id_tienda = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoProducto = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Producto WHERE AMY_Producto.id_producto = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getProductosRelacionados = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT id_producto FROM AMY_Producto INNER JOIN AMY_Relacion ON (AMY_Producto.id_producto = AMY_Relacion.producto_id_producto) OR (AMY_Producto.id_producto = AMY_Relacion.producto_2_id_producto) INNER JOIN AMY_Producto ON ($1 = AMY_Relacion.producto_id_producto) OR ($1 = AMY_Relacion.producto_2_id_producto);',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoCategoria = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Categoria WHERE AMY_Categoria.id_categoria = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getSubCategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Categoria INNER JOIN AMY_Categoria ON AMY_Categoria.fk_categoria = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoOferta = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Descuento WHERE AMY_Descuento.id_descuento = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoEvento = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Evento WHERE AMY_Evento.id_evento = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}
const getInfoPlato = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id } = req.body;
    const response = await pool.query('SELECT * FROM AMY_Plato WHERE AMY_Plato.id_plato = $1;',[id]);
    res.end(JSON.stringify(response.rows));
}


//Posts

//Puts

//Deletes

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