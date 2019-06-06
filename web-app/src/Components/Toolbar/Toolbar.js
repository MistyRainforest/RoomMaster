import React from 'react';

import './Toolbar.css';
import ToggleButton from '../SideDrawer/ToggleButton';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div>
                <ToggleButton />
            </div>
            <div className='toolbar__logo'><a href="/">ROOMMASTER</a></div>
            <div className='spacer' /> 
            <div className='toolbar_navigation-items'> 
                <ul>
                    <li><a href='/'>Products</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;