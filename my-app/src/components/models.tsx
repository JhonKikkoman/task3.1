export interface itemModel<T, U> {
    listing_id: U;
    url: T;
    MainImage?: { url_570xN: string };
    title: T;
    currency_code?: T;
    price: T;
    quantity: U;
};

export interface propModel<T> {
    item: T;
}
