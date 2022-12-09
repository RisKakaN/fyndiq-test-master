import ProductList from "../../components/ProductList/ProductList";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
import ProductsSort from "../../components/ProductsSort/ProductsSort";
import { LOADING, LOADING_SUCCEEDED } from "../../types";

import "./ProductsPage.css";
import { useProductsPage } from "./ProductsPage.hooks";

const ProductsPage = () => {
    const {
        loading,
        products,
        productsFilterActive,
        setProductsFilterActive,
        setActiveSort,
    } = useProductsPage();

    return (
        <div className="productsPage">
            <div className="productsPageFilterAndSort">
                <div className="productsPageFilter">
                    <ProductsFilter
                        productsFilterActive={productsFilterActive}
                        setProductsFilterActive={setProductsFilterActive}
                    />
                </div>
                <div className="productsPageSort">
                    <ProductsSort setActiveSort={setActiveSort} />
                </div>
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
