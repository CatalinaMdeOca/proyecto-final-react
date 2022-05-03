import { useContext } from "react";
import CartContext from '../../context/CartContext';
import './ItemCart.css'

const ItemCart = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    return(
        <div className="cartCard">
            <h3>{name}</h3>
            <p>Cantidad: {quantity}.</p> 
            <h4>Precio: $ {price}.</h4> 
            <h5>Subtotal: $ {price * quantity} </h5>
            <button onClick={() => removeItem(id)} className='buttonItemCart' >Eliminar</button>
        </div>
    )
}

export default ItemCart