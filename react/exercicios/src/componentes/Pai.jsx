import React from 'react';

import Filho from './Filho'

export default props =>
    <div>
        <hr/>
        <h1>Pai: {props.nome} {props.sobreNome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="pedro" sobreNome={props.sobreNome}/>
            {/* será exatamente igual ao pai */}
            <Filho {...props}/>
            {/* neste caso carla será sobreescrito pelo nome em props */}
            <Filho nome="carla" {...props}/>
            <Filho {...props} nome="julia"/>
        </ul>
    </div>