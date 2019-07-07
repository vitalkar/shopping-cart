import { GET_PRODUCT, GET_PRODUCTS } from '../constants/productConstants';

export const getProducts = () => ({type: GET_PRODUCTS});

export const getProduct = (id) => ({type: GET_PRODUCT, id});