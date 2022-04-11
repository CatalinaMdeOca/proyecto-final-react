import Counter from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ name, price, img, sinopsis }) => {
    const handleOnAdd = (quantity) =>{
        console.log(`Se agregaron ${quantity} productos al carrito`)
    }
    
    return(
        <div className="cardDetail">
            <picture>
                <img src={img} alt={name} />
            </picture>
            <h3>{ name }</h3>
            <h5>${ price }</h5>
            <p>{sinopsis}</p>
            <Counter  initial={0} stock={10} onAdd={handleOnAdd} />
        </div>
    )
}

export default ItemDetail