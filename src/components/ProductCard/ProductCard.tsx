import { FyndiqArticleInterface } from "../../api/types";

import "./ProductCard.css";
const productPlaceholder = require("../../assets/productPlaceholder.png");

type ProductCardProps = { product: FyndiqArticleInterface };

const ProductCard = ({ product }: ProductCardProps) => {
    const { images, title, price, averageRating, expectedDeliveryDate } =
        product;

    return (
        <div className="productCard">
            <img
                className="productCardImg"
                src={images[0].url || productPlaceholder}
                alt={title}
                onError={({ currentTarget }) => {
                    // Quick solution for handling images that are not found.
                    // Can for sure be made better.
                    currentTarget.onerror = null;
                    currentTarget.src = productPlaceholder;
                }}
            />
            <div className="productCardInfoContainer">
                <div className="productCardPriceAndQuickBuy">
                    <span className="productCardPrice">{price.formatted}</span>
                    <button
                        className="productCardQuickBuyButton"
                        onClick={(event) => {
                            event.stopPropagation();
                            console.log("Added to cart");
                        }}>
                            Add
                        </button>
                </div>
                <span className="productCardDescription" title={title}>
                    {title}
                </span>
                <span className="productCardRating">{averageRating}</span>
                <span className="productCardDeliveryDate">
                    {expectedDeliveryDate}
                </span>
            </div>
        </div>
    );
};

export default ProductCard;
