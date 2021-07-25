import './NavItem.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props =>
<Link  className="link pt-3 pb-4 d-flex justify-content-center" to={`${props.path}`}>
    <i className={`fa fa-${props.icon} pr-2`}></i>
    {props.title}
</Link>