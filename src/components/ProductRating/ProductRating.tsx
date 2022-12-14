import "./ProductRating.css";

const starIcon = require("../../assets/star.png");
const emptyStarIcon = require("../../assets/emptyStar.png");

type ProductRatingProps = {
    averageRating: string;
};
const ProductRating = ({ averageRating }: ProductRatingProps) => {
    const averageRatingAsNumber = Math.round(Number.parseFloat(averageRating));
    return (
        <div className="productRating">
            {[...Array(averageRatingAsNumber)].map((_, index) => (
                <img key={index} src={starIcon} alt="Star icon" />
            ))}
            {[...Array(5 - averageRatingAsNumber)].map((_, index) => (
                <img key={index} src={emptyStarIcon} alt="Emptytar icon" />
            ))}
            {averageRating}
        </div>
    );
};

export default ProductRating;
