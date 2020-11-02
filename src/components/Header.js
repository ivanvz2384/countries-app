import React from 'react';
import { Link } from 'react-router-dom'

export const Header = ({startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Country App</h1>
                </Link>
            </div>
        </div>
    </header>
)

export default Header;