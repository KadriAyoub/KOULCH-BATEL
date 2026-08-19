import NavBar from "../../components/common/navBar/NavBar"
import selecto from '../../assets/selecto.png'
import 'boxicons'
import './Home.css'
import ProductCard from "../../components/product/ProductCard"
import t_shirt from '../../assets/t-shirt.png'
import PageNumber from "../components/PageNumber/PageNumber"
import Footer from "../../components/common/footer/Footer"


export default function Home() {


    return (
        <div className="home-page">
            <NavBar />
            <div className="ads-container">
                <img className="ads" src={selecto} alt="selecto" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search by name, categorie ..." />
                <button>
                    <box-icon className='icon' name='filter-alt' color='white'></box-icon>
                </button>
            </div>
            <div className="product-container">
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
                <ProductCard image={t_shirt} />
            </div>
            <div className="page-numbers">
                <PageNumber number={1} />
                <PageNumber number={2} />
                <PageNumber number={3} />
                <PageNumber number={4} />
                <PageNumber number={5} />
                <div className="next-page">
                    <box-icon name='chevrons-right' color='#00229C'></box-icon>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
