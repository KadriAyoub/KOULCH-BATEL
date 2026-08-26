import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/products/";

export const getProducts = async () => {
    try {
            const response = await axios.get(API_URL);
            return response.data.produits;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error;
        }
}

export const createProduct = async (productData) => {
    const response = await axios.post(
      `${API_URL}/products`,
      productData
    );
  
    return response.data;
  };