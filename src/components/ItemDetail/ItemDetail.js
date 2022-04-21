import Counter from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetail = ({ id, name, price, img, sinopsis, stock }) => {
    const { addItem, isInCart } = useContext(CartContext);

    const handleOnAdd = (count) =>{
        console.log(`Se agregaron ${count} libros de ${name} al carrito`);

        const objProd = { id, name, price }

        addItem({...objProd, quantity: count});
    }
    
    return(
        <div className='container'>
            <div className="cardDetail">
                <picture>
                    <img src={img} alt={name} />
                </picture>
                <h3>{ name }</h3>
                <h5>${ price }</h5>
                <p>{sinopsis}</p>
                { isInCart(id) ? <Link to={`/cart`} className='toCart' > Ir al carrito </Link> : <Counter initial={1} stock={stock} onAdd={handleOnAdd} /> }
            </div>
        </div>
    )
}

export default ItemDetail