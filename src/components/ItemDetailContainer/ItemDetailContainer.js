import { getProductsById } from '../../asyncmock';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productsById, setProductsById] = useState([]);

    const { productId } = useParams();

    useEffect(() => {
        getProductsById(productId).then(prods => {
            setProductsById(prods)
        })
    })

    return(
        <div className='itemDetailContainer'>
            <ItemDetail {...productsById} />            
        </div>
    )
}

export default ItemDetailContainer