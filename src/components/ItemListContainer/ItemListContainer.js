import './ItemListContainer.css';
import { getProducts } from '../../asyncmock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        })
    })
    
    return(
        <div className="div">
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer