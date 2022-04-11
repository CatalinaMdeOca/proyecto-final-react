import { getProductsById } from '../../asyncmock';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [productsById, setProductsById] = useState([]);

    useEffect(() => {
        getProductsById(1).then(prods => {
            setProductsById(prods)
        })
    })

    return(
        <div className='itemDetailContainer'>
            <ItemDetail {...productsById}/>
        </div>
    )
}

export default ItemDetailContainer