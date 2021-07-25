import './Nav.css';
import React from 'react';
import NavItem from './NavItem';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem className="rounded" title="Início" icon="home" path="/"></NavItem>
            <NavItem title="Usuário" icon="users" path="/users"></NavItem>
        </nav>
    </aside>