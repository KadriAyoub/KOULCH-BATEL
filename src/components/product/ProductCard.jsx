import { Link } from "react-router-dom";
import 'boxicons'
import './ProductCard.css'

export default function Product({ image }) {


    return (
        <div className='product-card'>
            <img src={image} alt="product image" />
            <div className="card-context">
                <h3>Product title</h3>
                <p>This is the description of the products This is the descripti...</p>
            </div>
            <div className="bottom-card">
                <p>12.000,00 DZD</p>
                <Link to='/product-details'>
                    <button ><box-icon name='right-arrow-alt' color='#ffffff' ></box-icon></button>
                </Link>
            </div>
        </div>
    )
}
