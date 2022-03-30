import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return(
        <div className="div">
            <h2>{props.greeting}</h2>
        </div>
    )
}

export default ItemListContainer