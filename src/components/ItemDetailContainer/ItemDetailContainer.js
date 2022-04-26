import { getProductsById } from '../../asyncmock';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productsById, setProductsById] = useState([]);
    const [loading, setLoading] = useState(true)

    const { productId } = useParams();

    useEffect(() => {
        getProductsById(productId).then(prods => {
            setProductsById(prods)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    })

    return(
        <div className='itemDetailContainer'>
            {
                loading ? 
                    <h1 className='itemDetailContainerText'>Cargando...</h1> :
                productsById ?
                    <ItemDetail {...productsById} /> :
                    <h1 className='itemDetailContainerText'>El producto no fue encontrado</h1>
            }           
        </div>
    )
}

export default ItemDetailContainer