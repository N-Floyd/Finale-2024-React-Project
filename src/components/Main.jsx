import Bestselling from "./Bestselling";
import Browsing from "./Browsing";
import Discount from "./Discount";
import Discover from "./Discover";
import Footer from "./Footer";
import FooterF from "./FooterF";
import Header from "./Header";
import Productlist from "./Productlist";
import Shipping from "./Shipping";

const Main = () => {
  return (
    <div>
      <Discount />
      <Header />
      <Discover />
      <Shipping />
      <Bestselling />
      <Browsing />
      <Productlist />
      <FooterF />
      <Footer />
    </div>


  );
};

export default Main;