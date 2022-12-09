import { FyndiqArticleInterface } from "../../api/types";
import { useProductList } from "../../components/ProductList/ProductList.hooks";
import { useProductsFilter } from "../../components/ProductsFilter/ProductsFilter.hooks";
import { useProductsSort } from "../../components/ProductsSort/ProductsSort.hooks";

export const useProductsPage = () => {
    const { loading, products } = useProductList();

    const {
        productsFilterActive,
        setProductsFilterActive,
        filterProductsLessThan,
    } = useProductsFilter();

    const { activeSort, setActiveSort, sortProducts } = useProductsSort();

    const getProducts = (
        applyFilter: boolean,
        products: FyndiqArticleInterface[]
    ) => {
        if (applyFilter) {
            return sortProducts(
                activeSort,
                filterProductsLessThan(50, products)
            );
        } else {
            return sortProducts(activeSort, products);
        }
    };

    return {
        loading,
        products: getProducts(productsFilterActive, products),
        productsFilterActive,
        setProductsFilterActive,
        setActiveSort,
    };
};
