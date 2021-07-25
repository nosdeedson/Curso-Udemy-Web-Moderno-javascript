import './Header.css';
import React from 'react';

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <div className="row">
            <h1 className="mt-3">
                <i className={`fa fa-${props.icon}`}></i>
                {props.title}
            </h1>
            <p className="lead text-muted mt-4 ml-4">{props.subtitle}</p>
        </div>
    </header>