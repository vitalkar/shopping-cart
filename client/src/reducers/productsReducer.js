import { GET_PRODUCT, GET_PRODUCTS } from '../constants/productConstants';

const initialState = {

};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            console.log('get all products');
            
            break;
        case GET_PRODUCT:
            console.log('get single product');
            
            break;
    
        default:
    }
    return state;
}

export default productsReducer;