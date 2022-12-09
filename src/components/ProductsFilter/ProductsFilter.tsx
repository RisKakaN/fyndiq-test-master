import "./ProductsFilter.css";

type ProductsFilterProps = {
    productsFilterActive: boolean;
    setProductsFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProductsFilter = ({
    productsFilterActive,
    setProductsFilterActive,
}: ProductsFilterProps) => {
    return (
        <div className="productsFilter">
            <input
                type="checkbox"
                checked={productsFilterActive}
                onChange={() =>
                    setProductsFilterActive(
                        (productsFilterActive) => !productsFilterActive
                    )
                }
            />
            <label>Cheaper than 50kr</label>
        </div>
    );
};

export default ProductsFilter;
