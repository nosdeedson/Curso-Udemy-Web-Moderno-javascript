import React from 'react';
import  ReactDOM  from 'react-dom';

import {BoaTarde, BoaNoite} from './componentes/Multiplos';
import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho'
import PaiDinamico from './componentes/PaiDinamico';

ReactDOM.render(
    <div>
        <BoaNoite nome="ana"></BoaNoite>
        <BoaTarde nome="Lucas"/>
        <Saudacao tipo="" nome="juca"/>
        <Pai nome="Francisco" sobreNome="Souza"/>
        <hr/>
        <h1>Pai dinâmico</h1>
        <PaiDinamico nome="paulo" sobreNome="souza">
            <Filho nome="pedro" sobreNome="souza"/>
            <Filho nome="paulo" sobreNome="souza"/>
            <Filho nome="carla" sobreNome="souza"/>
            <Filho nome="maira" sobreNome="souza"/>
            <Filho nome="tales" sobreNome="souza"/>
        </PaiDinamico>

    </div>
, document.getElementById('root'));