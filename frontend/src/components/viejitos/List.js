import React, { useEffect, useState } from 'react';
import './Sections.css';


function List(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/getmembers');
        const items = await data.json();
        setItems(items);
    };

 
    return(<section>
        <h2>Lista de miembros</h2>
        {items.map(item => (
                <div class="container-fluid p-3 w-50">
                    <div class="card-deck">
                        <div class="card">
                            <div class="card-body p-1">
                                <h6 class="card-title">{item.nombre} {item.apellido}</h6>
                                <p class="card-text">CI: {item.cedula}</p>
                                <p class="card-text">Edad: {item.edad}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
    </section>);

}

export default List;