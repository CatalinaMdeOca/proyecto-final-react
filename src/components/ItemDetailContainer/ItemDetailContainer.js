import { getProductsById } from '../../asyncmock';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { firestoreDb } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [productsById, setProductsById] = useState([]);
    const [loading, setLoading] = useState(false)

    const { productId } = useParams();

    useEffect(() => {
        // getProductsById(productId).then(prods => {
        //     setProductsById(prods)
        // }).catch(err => {
        //     console.log(err)
        // }).finally(() => {
        //     setLoading(false)
        // })

        getDoc(doc(firestoreDb, 'products', productId)).then(response => {
            console.log(response)
            const product = { id: response.id, ...response.data() }
            setProductsById(product)
        })
    }, [productId])

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