import Counter from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ id, name, price, img, sinopsis, stock }) => {
    const { addItem, isInCart, cart } = useContext(CartContext);

    const handleOnAdd = (count) =>{
        console.log(`Se agregaron ${count} libros de ${name} al carrito`);
        console.log(cart)

        const objProd = { id, name, price, quantity: count }

        addItem(objProd);
    }
    
    return(
        <div className='container'>
            <div className="cardDetail">
                <picture>
                    <img src={img} alt={name} />
                </picture>
                <h3>{ name }</h3>
                <h5>$ { price }</h5>
                <p>{sinopsis}</p>
                <Counter initial={1} stock={stock} onAdd={handleOnAdd} />
                { isInCart(id) ?  
                    <div>
                        <Link to={'/cart'} className='toCart' >Ir al Carrito</Link>
                        <Link to={'/'} className='toCart' >Seguir comprando</Link>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default ItemDetail