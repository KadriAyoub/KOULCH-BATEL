import axios from "axios";

const baseurl = `${import.meta.env.VITE_API}/form`;

export const getAllContacts = () => {
  return axios.get(baseurl);
};

export const getContact = (id) => {
  return axios.get(`${baseurl}/${id}`);
};

export const createContact = (contactData) => {
  return axios.post(baseurl, contactData);
};

export const updateContact = (id, contactData) => {
  return axios.put(`${baseurl}/${id}`, contactData);
};

export const deleteContact = (id) => {
  return axios.delete(`${baseurl}/${id}`);
};
