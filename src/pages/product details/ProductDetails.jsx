import './ProductDetails.css'
import NavBar from '../../components/common/navBar/NavBar'
import Footer from '../../components/common/footer/Footer'
import { useState } from 'react'


export default function ProductDetails() {
    const [count,setCount]=useState(0)

    return (
        <div>
            <NavBar />
            <section className="product-section">
                <div className="imgaes-section">
                    <img src='' alt="product image" className='hero-img' />
                    <div className="product-images">
                        <img src='' alt="" />
                        <img src='' alt="" />
                        <img src='' alt="" />
                        <img src='' alt="" />
                        <img src='' alt="" />
                    </div>
                </div>

                <div className="description-section">
                    <h4>Product Title</h4>
                    <p>Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat obcaecati rem ab quas itaque repellendus, minima, error facere maxime, pariatur excepturi voluptatem alias. Excepturi, atque porro! Obcaecati doloribus accusamus ut?
                    Cupiditate, quasi porro officia quis iure, numquam magnam dolorem illum facere eaque distinctio. Maxime nisi culpa, necessitatibus reiciendis exercitationem ut enim, quas delectus mollitia nihil iure corrupti eaque inventore labore.
                    Optio sint quam totam ab, dicta molestiae. Praesentium omnis voluptate neque illum error. Iste mollitia repellat aspernatur itaque maiores expedita commodi, aut, sequi veritatis reprehenderit quisquam porro odit autem animi!
                    </p>
                    <div className="size">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                    <div className="color">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="item-count">
                        <button onClick={()=>setCount(count-1)}>-</button>
                        <span>{count}</span>
                        <button onClick={()=>setCount(count+1)}>+</button>
                    </div>
                    <p className='product-price'>140,00$</p>

                </div>
                <section className='contact-section'>

                </section>
            </section>
            <Footer />
        </div>
    )
}
