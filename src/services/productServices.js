import axios from "axios";

const baseurl = `${import.meta.env.VITE_API}/products`;

export const getProducts = async () => {
  try {
    const response = await axios.get(baseurl);
    return response.data.produits;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${baseurl}/${productId}`);
    return response.data.product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(baseurl, productData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};
