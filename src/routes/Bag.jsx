import Header from "../components/Header";
import Footer from "../components/Footer";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
function Bag(){
    const item = {
        id: "001",
        image: "images/1.jpg",
        company: "Carlton London",
        item_name: "Rhodium-Plated CZ Floral Studs",
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: "10 Oct 2023",
        rating: { stars: 4.5, count: 1400 }
    }
    return <>
      
        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                    <BagItem item={item}></BagItem>
                </div>
                <div className="bag-summary"><BagSummary></BagSummary>
                </div>
     
            </div>
        </main>

    </>
}
export default Bag;