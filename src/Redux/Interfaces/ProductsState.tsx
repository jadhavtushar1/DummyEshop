import Product from "./Product"

interface FetchProductSlice {
    isLoading : boolean,
    data : Product[],
}


interface ProductsState {
    AllProducts : FetchProductSlice,
    
}

export default ProductsState