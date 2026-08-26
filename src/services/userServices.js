import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:5001/api/v1/users/");
    return response.data;

  } catch (err) {
    console.log(err);
  }
};
