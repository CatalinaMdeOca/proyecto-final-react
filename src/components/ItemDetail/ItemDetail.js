import Counter from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ name, price, img, sinopsis, stock }) => {
    const [ quantity, setQuantity] = useState(0);

    const handleOnAdd = (count) =>{
        console.log(`Se agregaron ${count} libros de ${name} al carrito`);
        setQuantity(count);
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
                { quantity > 0 ? <Link to={`/cart`} className='toCart' > Ir al carrito </Link> : <Counter initial={0} stock={stock} onAdd={handleOnAdd} /> }
            </div>
        </div>
    )
}

export default ItemDetail