import Discount from "../components/Discount";
import Footer from "../components/Footer";
import FooterF from "../components/FooterF";
import Header from "../components/Header";
import ListingSearch from "./pagesComponents/ListingSearch";
import Sidebar from "./pagesComponents/Sidebar";


const Listing = () => {
    return (
        <div>
            <Discount />
            <Header />
            <ListingSearch />
            <Sidebar />
            <FooterF />
            <Footer />
        </div>
    )
};

export default Listing;