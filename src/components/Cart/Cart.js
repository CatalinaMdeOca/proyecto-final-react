import { useContext } from "react";
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import './Cart.css';
import Form from '../Form/Form'

const Cart = () => {
    const { cart, precioTotal, clearCart } = useContext(CartContext);

    if (cart.length === 0){
        return(
            <div>
                <h3 className="cartTitle"> No hay productos en el carrito </h3>
                <Link to={'/'} className="cartButton" >Seguir comprando</Link>
            </div>
        )
    }

    return(
        <div className="cart">
            <h1 className="cartTitle">Carrito</h1>
            <ul className="cartUl">
                {
                    cart.map(prod => <li key={prod.id}  className="cartLi"><ItemCart { ...prod } /></li>)
                }
            </ul>
            <p className="cartTotalPrice">Precio total: $ {precioTotal(cart)}</p>
            <button  className="cartButton"><Link to={'/order'} className="cartLink" >Finalizar compra</Link></button>
            <button  className="cartButton" onClick={() => clearCart()}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart