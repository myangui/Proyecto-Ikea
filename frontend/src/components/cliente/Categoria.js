import React, { useEffect, useState } from 'react';
import '../Sections.css';

function Categoria(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items1, setItems] = useState([]);
    const [items2, setItems] = useState([]);
    const id = 0;

    const fetchItems1 = async () => {
        const data1 = await fetch(`/getinfocategoria/${id}`);
        const items1 = await data1.json();
        setItems(items1);
    };
    const fetchItems2 = async () => {
        const data2 = await fetch(`/getsubcategorias/${id}`);
        const items2 = await data2.json();
        setItems(items2);
    };

    return(<section>
        {items1.map(item =>(empty))}
    </section>);

}

export default Categoria;