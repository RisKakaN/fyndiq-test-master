import { FyndiqArticleInterface } from "./types";

// Creating a function for fetching the specific data.
// This helps us separate this logic from our component code.

export const fetchProducts = async (): Promise<FyndiqArticleInterface[]> => {
    const response = await fetch(
        "https://shop-bff.fyndiq.se/code-assignment/articles",
        {
            method: "GET",
            headers: { market: "SE", locale: "sv-SE" },
        }
    );
    const { articles }: { articles: FyndiqArticleInterface[] } =
        await response.json();
    return articles;
};
