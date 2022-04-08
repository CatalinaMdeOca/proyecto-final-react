import './ItemListContainer.css';
import Counter from '../ItemCount/ItemCount';
import { getProducts } from '../../asyncmock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
    const handleOnAdd = (quantity) =>{
        console.log(`Se agregaron ${quantity} productos al carrito`)
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        })
    })
    
    return(
        <div className="div">
            <Counter  initial={0} stock={10} onAdd={handleOnAdd} />
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer