import { Link } from "react-router";
import 'boxicons'
import './ProductCard.css'

export default function Product({ images ,name ,description ,price}) {


    return (
        <div className='product-card'>
            <img src={images} alt="product image" />
            <div className="card-context">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="bottom-card">
                <p>{price} DZD</p>
                <Link to='/product-details'>
                    <button ><box-icon name='right-arrow-alt' color='#ffffff' ></box-icon></button>
                </Link>
            </div>
        </div>
    )
}
