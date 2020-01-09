import * as Types from '../constants/ActionType';
import apicall from '../utils/ApiCall';

//show view data
export const actFetchProductsRequest  = () => {
    return (dispatch) => {
        return apicall('products','GET',null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}


export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}

// xoá dữ liệu
export const actDelProductRequest  = (id) => {
    return dispatch =>{
        return apicall(`products/${id}`,'DELETE',null).then(res =>{
            dispatch(actDelProduct(id))
        })
    }
}


export const actDelProduct  = (id) => {
    return{
        type : Types.DELETE_PRODUCTS,
        id
    }
}

//thêm dữ liệu
export const actAddProductRequest  = (products) => {
    return dispatch => {
        apicall('products','POST',products).then(res => {
            dispatch(actAddProduct(res.data))
        })
    }
}


export const actAddProduct = (products) => {
    return {
        type : Types.ADD_PRODUCTS,
        products
    }
}

//edit dữ liệu
export const actGetProductRequest  = (id) => {
    return dispatch => {
        apicall(`products/${id}`,'GET',null).then(res=>{
            dispatch(actGetProduct(res.data));
        })
    }
}


export const actGetProduct  = (products) => {
    return {
        type : Types.EDIT_PRODUCTS,
        products
    }
}

//update dữ liệu
export const actUpProductRequest  = (products) => {
    return dispatch => {
        return apicall (`products/${products.id}`,'PUT',products).then(res=>{
            dispatch(actUpProduct(res.data))
        })
    }
}


export const actUpProduct  = (products) => {
    return {
        type : Types.UPDATE_PRODUCTS,
        products
    }
}
