import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1> Expensify </h1>
        <NavLink className='menu-link' activeClassName='menu-link-active' exact={true} to='/'>Домой</NavLink>
        <NavLink className='menu-link' activeClassName='menu-link-active' to='/create'>Добавить расходы</NavLink>
        {/* <NavLink className='menu-link' activeClassName='menu-link-active' to='/edit'>Редактировать расходы</NavLink> */}
        <NavLink className='menu-link' activeClassName='menu-link-active' to='/help'>Справка</NavLink>
    </header>
);

export default Header;