import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div className="navDiv">
            <nav className="navBar">
                <h2 className="navBrand">Libros CM</h2>
                <ul>
                    <li className="navItem">Romance</li>
                    <li className="navItem">Fantasía</li>
                    <li className="navItem">Terror</li>
                </ul>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar