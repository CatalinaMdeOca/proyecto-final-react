import './Item.css';

const Item = ({ name, price, img }) => {
    return(
        <div className="card">
            <picture>
                <img src={img} alt={name} />
            </picture>
            <h3>{ name }</h3>
            <h5>${ price }</h5>
        </div>
    )
}

export default Item