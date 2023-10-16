import { itemModel, itemType } from "../models";

export default function Listing({ items }: itemType) {
    return (
        <>
            {items.map((e: itemModel) => {
                let levelProp: string = "";
                if (e.title && e.quantity !== undefined) {
                    if (e.quantity <= 10) {
                        levelProp = "low";
                    } else if (e.quantity <= 20) {
                        levelProp = "medium";
                    } else if (e.quantity > 20) {
                        levelProp = "high";
                    }
                    return (
                        < div key={e.listing_id} className="item-list" >
                            <div className="item">
                                <div className="item-image">
                                    <a href={e.url}>
                                        <img src={e.MainImage?.url_570xN} alt=""></img>
                                    </a>
                                </div>
                                <div className="item-details">
                                    <p className="item-title">{e.title.length > 50 ? e.title.slice(0, 50) + '...' : e.title}</p>
                                    <p className="item-price">{e.currency_code}{e.price}</p>
                                    <p className={`item-quantity level-${levelProp}`}>{e.quantity}</p>
                                </div>
                            </div>
                        </div >
                    )
                }
            })}
        </>
    );
}