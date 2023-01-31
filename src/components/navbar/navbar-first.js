import React from 'react';
import './navbar.css';

import logo from '../../img/logo-3_new.png';



function navbar() {
    return (

        <nav class="navbar" >
            <a href='/'>
                <div class="logo"><img className="logo" src={logo} alt="logo" /></div>
            </a>
            <ul class="nav-links">

                <div class="menu">



                    <li class="services">
                        <a href="/note">
                            TakeNotes
                        </a>
                    </li>



                    <li><a href='/'>
                        Back to Home
                    </a></li>



                </div>

            </ul>
        </nav>

    )
}

export default navbar