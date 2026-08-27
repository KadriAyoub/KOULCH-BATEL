import axios from "axios";

const API_URL = "http://localhost:5001/api/v1/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);

    return response.data.produits;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}`);

    return response.data.product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData);

    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
