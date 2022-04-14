import './ItemListContainer.css';
import { getProducts } from '../../asyncmock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        })
    }, [categoryId])
    
    return(
        <div className="div">
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer