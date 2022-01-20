import React, { useEffect, useState } from 'react';
import '../Sections.css';

function CatalogoCiudadAdmin(){
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    const id = 0;

    const [fecha_inicial, setFechaIni] = useState('');
    const [fecha_final, setFechaFin] = useState('');
    const [Region_id_region, setRegionID] = useState('');

    const fetchItems = async () => {
        const data = await fetch(`/getregion`);
        const items = await data.json();
        setItems(items);
    };

    return(<section>
        <h2>Editar catalogo</h2>
        <Form className="create-form" onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Fecha Inicial</label>
                    <input type="date" value={fecha_inicial} onChange={(e) => setFechaIni(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Nivel de Categoría</label>
                    <input  type="date" value={fecha_final} onChange={(e) => setFechaFin(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Región</label>
                    <Select className="basic-single" classNamePrefix="select" defaultValue={fk_categoria} onChange={(e) => setFK_Categoria(e.target.value)}>
                        {
                            items.map(item => (
                                <option value={item.id_region}>{item.nombre}</option>
                              ))
                        }
                    </Select>
                </Form.Field>
                <Button type='submit'>Modificar</Button>
            </Form>
    </section>);

}

export default CatalogoCiudadAdmin;