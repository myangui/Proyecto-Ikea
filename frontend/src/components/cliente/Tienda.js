import React, { useEffect, useState } from 'react';
import '../Sections.css';
import ListaCategoriasCliente from './ListaCategoriasCliente';
import ListaProductosCliente from './ListaProductosCliente';
import ListaEventosCliente from './ListaEventosCliente';
import ListaOfertasCliente from './ListaOfertasCliente';

function Tienda(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;

    const fetchItems = async () => {
        const data = await fetch(`/getinfotienda/${id}`);
        const items = await data.json();
        setItems(items);
    };

    return(<section>
        <ListaCategoriasCliente/>
        <ListaProductosCliente/>
        <ListaEventosCliente/>
        <ListaOfertasCliente/>
    </section>);

}

export default Tienda;