import { itemModel, propModel } from "../models";

export default function Listing({ item }: propModel<object>| any): JSX.Element { /// так и не разобрался с any 
    let levelProp: string = "";
    const checkinQuantity = (etc: number): string => {
        if (etc <= 10) {
            levelProp = "item-quantity level-low";
        } else if (etc <= 20) {
            levelProp = "item-quantity level-medium";
        } else if (etc > 20) {
            levelProp = "item-quantity level-high";
        }
        return levelProp;
    }

    return (
        <>
            {item.map((e: itemModel<string, number>) =>
                < div key={e.listing_id} className="item-list" >
                    <div className="item">
                        <div className="item-image">
                            <a href={e.url}>
                                <img src={e.MainImage?.url_570xN} alt=""></img>
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{e.title?.length > 50 ? e.title.slice(0, 50) + '...' : e.title}</p>
                            <p className="item-price">{e.currency_code}{e.price}</p>
                            <p className={checkinQuantity(e.quantity)}>{e.quantity}</p>
                        </div>
                    </div>
                </div >)}
        </>
    );
}