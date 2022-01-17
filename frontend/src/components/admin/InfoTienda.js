import React, { useEffect, useState } from 'react';
import '../Sections.css';

function InfoTienda(){
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

    </section>);

}

export default InfoTienda;