import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    console.log('My auth status is: ', auth);

    const authButton = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
            <a href="/login">Login</a>
        );
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">React SSR</Link>
                <ul className="right">
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        {authButton}
                    </li>
                </ul>
            </div>
        </nav>
    )
};
function mapStateToProps({ auth }) {
    return { auth }
}
export default connect(mapStateToProps)(Header);