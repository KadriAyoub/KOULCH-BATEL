import "boxicons";
import t_shirt from "../../assets/images/t-shirt.png";
import PageNumber from "../../components/PageNumber/PageNumber";
import ProductCard from "../../components/product/ProductCard";
import AdsSwipper from "../../components/swipper/AdsSwipper";
import PreLoader from "../../config/perloader/PreLoader";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <PreLoader/>
      <div className="ads-container">
        <AdsSwipper/>
      </div>
      <div id="search-bar" className="search-bar">
        <input type="text" placeholder="Search by name, categorie ..." />
        <button>
          <box-icon className="icon" name="filter-alt" color="white"></box-icon>
        </button>
      </div>
      <div id="products-container" className="product-container">
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
          <box-icon name="chevrons-right" color="#00229C"></box-icon>
        </div>
      </div>
    </div>
  );
}
