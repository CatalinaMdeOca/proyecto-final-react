import { useState, useContext } from "react";
import { addDoc, collection, Timestamp, getDocs, writeBatch, query, where, documentId } from "firebase/firestore";
import CartContext from '../../context/CartContext';
import { firestoreDb } from "../../services/firebase";
import './Form.css';

const Form = () => {
    const {cart, precioTotal, clearCart } = useContext(CartContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(true)
    const [orderId, setOrderId] = useState('')

    const createOrder = (e) => {
        e.preventDefault()
        const objOrder = {
            items: cart,
            buyer: {
                name: name,
                email: email,
                phone: phone,
            },
            total: precioTotal(cart),
            date: Timestamp.fromDate(new Date())
        }

        console.log(objOrder)

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock= []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() =>{
                if (outOfStock.length === 0) {
                    const collectionReference = collection(firestoreDb, 'orders')

                    return addDoc(collectionReference, objOrder)
                } else {
                    return Promise.reject({name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                setOrderId(id)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
                clearCart()
            })

            if (loading) {
                return <h1>Se está generando su orden</h1>
            }
    }

    return(
        <div className="formContainer">
            {
                orderId ?

                <h1 className="formH1">El id de su orden es {orderId}</h1> :

                <form onSubmit={createOrder} className='form'>
                    <label className="formLabel">Inserte aquí su nombre y apellido</label>
                    <input type='text' onChange={(e) => setName(e.target.value)} required className="formInput"/>
                    <label className="formLabel">Inserte aquí su email</label>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} required className="formInput"/>
                    <label className="formLabel">Inserte aquí su número de teléfono</label>
                    <input type='number' onChange={(e) => setPhone(e.target.value)} required className="formInput"/>

                    <button type='submit' className="formButton">Submit</button>
                </form>
            }
        </div>
    )
}

export default Form