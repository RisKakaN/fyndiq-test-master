import "./ProductsSort.css";
import { SortOptions } from "./ProductsSort.hooks";

type ProductsSortProps = {
    setActiveSort: React.Dispatch<React.SetStateAction<SortOptions>>;
};
const ProductsSort = ({ setActiveSort }: ProductsSortProps) => {
    return (
        <div className="productsSort">
            <label>Sortera på:</label>
            <select
                name="sort"
                onChange={(event) =>
                    setActiveSort(event.target.value as SortOptions)
                }
            >
                <option value={SortOptions.Default}>Mest relevanta</option>
                <option value={SortOptions.MostExpensive}>Dyrast först</option>
                <option value={SortOptions.Cheapest}>Billigast först</option>
            </select>
        </div>
    );
};

export default ProductsSort;
