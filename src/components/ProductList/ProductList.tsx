import { FyndiqArticleInterface } from "../../api/types";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

type ProductListProps = {
    products: FyndiqArticleInterface[];
};

const ProductList = ({ products }: ProductListProps) => {
    return (
        <ul className="productList">
            {products.map((product) => (
                <li
                    className="productListItem"
                    key={product.articleId}
                    onClick={() => console.log("Navigate to product page.")}
                >
                    <ProductCard key={product.articleId} product={product} />
                </li>
            ))}
        </ul>
    );
};

export default ProductList;
