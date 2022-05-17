import './CartWidget.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext);

    if(getQuantity() === 0){
        return null
    }

    return(
        <div className='cartWidget'>
            <Link to={'/cart'} className='cartWidgetLink'>
                <img className='icon' src='../../productsImgs/cart-icon.svg' alt='cart' />
                <p>{ getQuantity() }</p>
            </Link>
        </div> 
    )
}

export default CartWidget