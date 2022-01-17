import React, { useEffect, useState } from 'react';
import '../Sections.css';

function InfoTiendas(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/getinfotiendas');
        const items = await data.json();
        setItems(items);
    };

    return(<section>
        {items.map(item =>(empty))}
    </section>);

}

export default InfoTiendas;
