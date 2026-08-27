import "boxicons";
import t_shirt from "../../assets/images/t-shirt.png";
import PageNumber from "../../components/PageNumber/PageNumber";
import ProductCard from "../../components/product/ProductCard";
import AdsSwipper from "../../components/swipper/AdsSwipper";
import PreLoader from "../../config/perloader/PreLoader";
import "./Home.css";

import { useEffect, useState } from "react";
import { getProducts } from "../../services/productServices";

export default function Home() {
  const [data, setData] = useState([]);
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="home-page">
      <PreLoader />
      <div className="ads-container">
        <AdsSwipper />
      </div>
      <div id="search-bar" className="search-bar">
        <input type="text" placeholder="Search by name, categorie ..." />
        <button>
          <box-icon className="icon" name="filter-alt" color="white"></box-icon>
        </button>
      </div>
      <div id="products-container" className="product-container">
        {data.map((product) => {
          return (
            <>
              <ProductCard
                image={t_shirt}
                name={product.name}
                images={product.images}
                description={product.description}
                price={product.price}
                id={product._id}
              />
            </>
          );
        })}
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
