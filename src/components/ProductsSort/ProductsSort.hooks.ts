import { useState } from "react";
import { FyndiqArticleInterface } from "../../api/types";

export enum SortOptions {
    Default = "Default",
    MostExpensive = "MostExpensive",
    Cheapest = "Cheapest",
}
export const useProductsSort = () => {
    const [activeSort, setActiveSort] = useState<SortOptions>(
        SortOptions.Default
    );
    const sortProducts = (
        order: SortOptions,
        products: FyndiqArticleInterface[]
    ) => {
        if (order === SortOptions.MostExpensive) {
            return [...products].sort(
                (a, b) => b.price.amount - a.price.amount
            );
        } else if (order === SortOptions.Cheapest) {
            return [...products].sort(
                (a, b) => a.price.amount - b.price.amount
            );
        } else {
            return products;
        }
    };

    return {
        activeSort,
        setActiveSort,
        sortProducts,
    };
};
