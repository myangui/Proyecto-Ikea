import React, { useEffect, useState } from 'react';
import '../Sections.css';

function CatalogoCiudadAdmin(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;

    const fetchItems = async () => {
        const data = await fetch(`/getinfoproductos/${id}`);
        const items = await data.json();
        setItems(items);
    };

    return(<section>
        {items.map(item =>(empty))}
    </section>);

}

export default CatalogoCiudadAdmin;