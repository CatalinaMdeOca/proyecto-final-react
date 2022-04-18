import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncmock';

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    })

    return (
        <div className="navDiv">
            <nav className="navBar">
                <h2><Link to='/' className="navBrand">Libros CM</Link></h2>
                {/* <ul>
                    <li className="navItem"><Link to='/' className="navLink">Todos</Link></li>
                    <li className="navItem"><Link to='/' className="navLink">Romance</Link></li>
                    <li className="navItem"><Link to='/' className="navLink">Fantasía</Link></li>
                    <li className="navItem">Terror</li>
                </ul> */}
                
                <div>
                    <NavLink to='/' className="navLink">Todos</NavLink>
                    { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className="navLink">{cat.description}</NavLink>) }
                </div>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar