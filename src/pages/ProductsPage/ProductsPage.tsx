import ProductList from "../../components/ProductList/ProductList";
import { useProductList } from "../../components/ProductList/ProductList.hooks";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
import { LOADING, LOADING_SUCCEEDED } from "../../types";

import "./ProductsPage.css";

const ProductsPage = () => {
    const { loading, products, productsFilterActive, setProductsFilterActive } =
        useProductList();

    return (
        <div className="productsPage">
            <div className="productsPageFilterAndSort">
                <div className="productsPageFilter">
                    <ProductsFilter
                        productsFilterActive={productsFilterActive}
                        setProductsFilterActive={setProductsFilterActive}
                    />
                </div>
                <div className="productsPageSort">Sort placeholder</div>
            </div>
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
