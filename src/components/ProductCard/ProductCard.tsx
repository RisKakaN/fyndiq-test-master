import { FyndiqArticleInterface } from "../../api/types";

import "./ProductCard.css";
const productPlaceholder = require("../../assets/productPlaceholder.png");
const quickBuyIcon = require("../../assets/quickBuyIcon.png");

type ProductCardProps = { product: FyndiqArticleInterface };

const ProductCard = ({ product }: ProductCardProps) => {
    const {
        images,
        title,
        price,
        averageRating,
        expectedDeliveryDate,
        articleUrl,
    } = product;

    return (
        <div
            className="productCard"
            onClick={() => {
                // Just for fun...
                window.location.href = `https://fyndiq.se/${articleUrl}`;
            }}
        >
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
                    <div className="productCardQuickBuyButton">
                        <img
                            src={quickBuyIcon}
                            alt="Quick buy"
                            onClick={(event) => {
                                event.stopPropagation();
                                console.log("Added to cart");
                            }}
                        />
                    </div>
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
