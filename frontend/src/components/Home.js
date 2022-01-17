import React, { useEffect, useState } from 'react';
import './Sections.css';
import ListaTiendasHome from './ListaTiendasHome';

function Home(){
 
    return(<section>
        <div>
            <ListaTiendasHome/>
        </div>
    </section>);

}

export default Home;