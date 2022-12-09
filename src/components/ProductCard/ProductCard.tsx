import { FyndiqArticleInterface } from "../../api/types";
import ProductRating from "../ProductRating/ProductRating";

import "./ProductCard.css";
import { getFormattedDate } from "./ProductCard.util";
const productPlaceholder = require("../../assets/productPlaceholder.png");
const quickBuyIcon = require("../../assets/quickBuyIcon.png");
const deliveryIcon = require("../../assets/deliveryIcon.png");

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
                <ProductRating averageRating={averageRating} />
                <div className="productCardDeliveryDate">
                    <img src={deliveryIcon} alt="Delivery icon" />
                    <span className="productCardDeliveryDateText">
                        {getFormattedDate(expectedDeliveryDate)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
