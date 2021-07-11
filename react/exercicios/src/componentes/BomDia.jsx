import React, {Fragment} from 'react'

export default (propos) => 
    <Fragment>
        <h1>Bom dia {propos.nome}</h1>
        <h2>Parabéns pelos seus {propos.idade} de vida</h2>
    </Fragment>