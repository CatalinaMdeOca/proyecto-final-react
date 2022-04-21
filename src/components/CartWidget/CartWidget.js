import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    return(
        <div className='cartWidget'>
            <img className='icon' src='./images/cart-icon.svg' alt='cart' />
            { getQuantity() }
        </div> 
    )
}

export default CartWidget