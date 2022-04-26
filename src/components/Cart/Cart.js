import { useContext } from "react";
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, precioTotal, clearCart } = useContext(CartContext);

    if (cart.length === 0){
        return(
            <div>
                <h3> No hay productos en el carrito </h3>
                <Link to={'/'} >Seguir comprando</Link>
            </div>
        )
    }

    return(
        <div>
            <h1>Carrito</h1>
            <ul>
                {
                    cart.map(prod => <li key={prod.id}>{prod.name}. Cantidad: {prod.quantity}. Precio: $ {prod.price}. Subtotal: $ {prod.price * prod.quantity} <button onClick={() => removeItem(prod.id)}>Eliminar</button></li>)
                }
            </ul>
            <p>Precio total: $ {precioTotal(cart)}</p>
            <button>Finalizar compra</button>
        </div>
    )
}

export default Cart