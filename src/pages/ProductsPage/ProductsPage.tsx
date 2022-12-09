import ProductList from "../../components/ProductList/ProductList";
import { useProductList } from "../../components/ProductList/ProductList.hooks";
import { LOADING, LOADING_SUCCEEDED } from "../../types";

import "./ProductsPage.css";

const ProductsPage = () => {
    const { loading, products } = useProductList();

    return (
        <div className="productsPage">
            {loading === LOADING ? (
                "Loading..."
            ) : loading === LOADING_SUCCEEDED ? (
                <ProductList products={products} />
            ) : (
                "Network error. Please try again."
            )}
        </div>
    );
};

export default ProductsPage;
