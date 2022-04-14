import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img }) => {
    return(
        <div className="card">
            <picture>
                <img src={img} alt={name} />
            </picture>
            <h3>{ name }</h3>
            <h5>${ price }</h5>
            <Link to={`/detail/${id}`} className='verDetail'>Ver detalle</Link>
        </div>
    )
}

export default Item