import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/services";
import { FyndiqArticleInterface } from "../../api/types";
import {
    LOADING,
    LOADING_FAILED,
    LOADING_NOT_STARTED,
    LOADING_STATES,
    LOADING_SUCCEEDED,
} from "../../types";

interface ProductsState {
    loading: LOADING_STATES;
    products: FyndiqArticleInterface[];
}

// Basic way of handling the presentation of data loading, failed, succeded,
// by using loading states.
const initialProductsState: ProductsState = {
    loading: LOADING_NOT_STARTED,
    products: [],
};

export const useProductList = () => {
    const [productsState, setProductsState] =
        useState<ProductsState>(initialProductsState);

    useEffect(() => {
        setProductsState({
            ...initialProductsState,
            loading: LOADING,
        });
        fetchProducts()
            .then((response) => {
                setProductsState({
                    loading: LOADING_SUCCEEDED,
                    products: response,
                });
            })
            .catch(() => {
                setProductsState({
                    loading: LOADING_FAILED,
                    products: [],
                });
            });
    }, []);

    return {
        loading: productsState.loading,
        products: productsState.products,
    };
};
