import './ItemListContainer.css';
import Counter from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    const handleOnAdd = (quantity) =>{
        console.log(`Se agregaron ${quantity} productos al carrito`)
    }
    
    return(
        <div className="div">
            <h2>{props.greeting}</h2>
            <Counter  initial={0} stock={10} onAdd={handleOnAdd} />
        </div>
    )
}

export default ItemListContainer