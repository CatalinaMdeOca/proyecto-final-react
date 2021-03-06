import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncmock';
import { firestoreDb } from '../../services/firebase';
import { getDocs, collection } from 'firebase/firestore';

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // getCategories().then(categories => {
        //     setCategories(categories)
        // })

        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [])

    return (
        <div className="navDiv">
            <nav className="navBar">
                <h2><Link to='/' className="navBrand">Libros CM</Link></h2>
                
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