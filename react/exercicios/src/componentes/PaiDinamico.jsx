import React from 'react';

import {childrenWithProps} from '../utils/utils';

export default props =>
    <div>
        <h1>Pai: {props.nome} {props.sobreNome}</h1>
        <h1>Filhos</h1>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>