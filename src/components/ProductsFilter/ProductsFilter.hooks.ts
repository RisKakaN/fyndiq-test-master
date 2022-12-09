import { useState } from "react";
import { FyndiqArticleInterface } from "../../api/types";

export const useProductsFilter = () => {
    const [productsFilterActive, setProductsFilterActive] = useState(false);

    const filterProductsLessThan = (
        price: number,
        products: FyndiqArticleInterface[]
    ) => products.filter((product) => product.price.amount < price);

    return {
        productsFilterActive,
        setProductsFilterActive,
        filterProductsLessThan,
    };
};
