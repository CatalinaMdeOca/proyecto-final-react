import { useState } from 'react';
import './ItemCount.css'

const Counter = ( {initial, stock, onAdd} ) => {
    let [count, setCount] = useState(initial);

    // useEffect(() => {
    //     console.log('Se montó el cmponente');
    // }, [])

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);            
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);           
        }
    }

    return(
        <div className='itemCountDiv'>
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <div className='divAgregar'>
                <button className='buttonAgregar' onClick={() => {onAdd(count); setCount(0)}}>Agregar al carrito</button>
            </div>
            
        </div>
    )
}

export default Counter