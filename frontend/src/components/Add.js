import React, { useState } from 'react';
import './Sections.css';

function Add(){
    const [cedula, setCedula] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const miembro = { cedula, nombre, apellido, edad } 

    fetch('/addmember', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(miembro)
    });
    window.location.reload();
    };

    return(<section>
         <h2>Agregar miembro</h2>
      <form onSubmit={handleSubmit}>
      <div class="card-body p-1">
        <label>Cedula:</label>
        <input 
          type="number" 
          required 
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
        />
        <label>Nombre:</label>
        <input 
          type="text" 
          required 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Apellido:</label>
        <input 
          type="text" 
          required 
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label>Edad:</label>
        <input 
          type="number" 
          required 
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <button>Agregar</button>
        </div>
      </form>
    </section>);
}

export default Add;