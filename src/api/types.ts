// We should ideally get a generated type specification from the backend.
// It should specify the result type so that we do not need to do it in the frontend.
// Since I did not get that, I will create my own as a workaround, which I have based on how the API result looks like.
// In the end, this lets us type everything and keep the code bug free. (assuming that the api looks like this)

export interface FyndiqArticleImageInterface {
    cloudinaryId: string;
    url: string;
}

export interface FyndiqArticlePriceInterface {
    formatted: string;
    amount: number;
    currency: string;
}

export interface FyndiqArticleInterface {
    articleId: string;
    articleUrl: string;
    images: FyndiqArticleImageInterface[];
    oldPrice: FyndiqArticlePriceInterface | null;
    price: FyndiqArticlePriceInterface;
    productId: string;
    shippingTimeMax: string;
    shippingTimeMin: string;
    slug: string;
    title: string;
    averageRating: string;
    expectedDeliveryDate: string;
}
