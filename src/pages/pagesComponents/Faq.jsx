import { useState } from "react";
import Discount from "../../components/Discount";
import Header from "../../components/Header";
import FooterBG from "./FooterBG";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I place an order?",
            answer: (
                <>
                    Placing an order is simple! Just follow these steps:
                    <ul className="list-disc pl-5 mt-2">
                        <li>Browse our collection and choose your desired items.</li>
                        <li>Select the size and color (if applicable) for each product.</li>
                        <li>Add the items to your cart by clicking the "Add to Cart" button.</li>
                        <li>When you're ready to checkout, click the cart icon and follow the prompts to complete your order.</li>
                        <li>Provide your shipping and payment details, then submit your order. You'll receive a confirmation email once your order is placed!</li>
                    </ul>
                </>
            ),
        },
        {
            question: "What payment methods do you accept?",
            answer: (
                <ul className="list-disc pl-5 mt-2">
                    <li>Credit and Debit Cards (Visa, MasterCard, American Express, Discover)</li>
                    <li>PayPal</li>
                    <li>Apple Pay</li>
                    <li>Google Pay</li>
                    <li>Shop Pay</li>
                </ul>
            ),
        },
        {
            question: "Can I modify or cancel my order after placing it?",
            answer: "Once your order has been confirmed, it is processed quickly to ensure timely shipping. Unfortunately, we are unable to modify or cancel orders once they are placed. If you need to make changes, please contact our customer service team as soon as possible, and we will do our best to assist you.",
        },
        {
            question: "How can I track my order?",
            answer: "Once your order has been shipped, you will receive an email with a tracking number. You can use this number on our website or the carrier's site to track the status of your delivery. If you need assistance with tracking, feel free to reach out to our customer support team.",
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes! We offer international shipping to select countries. Shipping rates and delivery times vary depending on your location. For more details, please visit our Shipping & Delivery page to see a full list of countries we ship to.",
        },
        {
            question: "What are the shipping costs?",
            answer: "Shipping costs depend on the shipping method you select and your location. We offer free standard shipping on orders over $50 within the U.S. For international orders, shipping fees are calculated at checkout based on the destination country and order size.",
        },
        {
            question: "How long will it take for my order to arrive?",
            answer: (
                <>
                    Orders typically ship within 1-2 business days. Delivery times vary depending on your location and shipping method:
                    <ul className="list-disc pl-5 mt-2">
                        <li>Standard Shipping: 5-7 business days (U.S. domestic)</li>
                        <li>Express Shipping: 2-3 business days (U.S. domestic)</li>
                        <li>International Shipping: 7-15 business days, depending on the destination country</li>
                    </ul>
                    Once your order is shipped, you will receive a tracking email to keep you updated.
                </>
            ),
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy on most items. If you're not completely satisfied with your purchase, you can return unworn, unwashed, and undamaged items within 30 days of receipt for a full refund or store credit. Some items like sale products or intimate wear may not be eligible for return.",
        },
        {
            question: "How do I exchange an item?",
            answer: "Exchanges are easy! If you need a different size or color, simply return the item following our return process, and place a new order for the replacement item. You can contact our customer support team if you need assistance with exchanges.",
        },
        {
            question: "Do you offer gift cards?",
            answer: "Yes, we offer digital gift cards! Gift cards are available in various denominations and can be used on any product in our store. To purchase a gift card, visit our Gift Cards page.",
        },
        {
            question: "How do I know if a product is in stock?",
            answer: "Product availability is updated in real-time on our website. If an item is out of stock, we will display an 'Out of Stock' notice on the product page. You can sign up to be notified when the item is back in stock by clicking the 'Notify Me' button on the product page.",
        },
        {
            question: "Can I use multiple promo codes on a single order?",
            answer: "Only one promo code can be applied per order. Promo codes cannot be combined with other offers unless stated otherwise. Be sure to check our Sales & Offers page for current promotions!",
        },
        {
            question: "How do I return an item?",
            answer: (
                <>
                    To initiate a return, please follow these steps:
                    <ul className="list-disc pl-5 mt-2">
                        <li>Visit our Returns & Exchanges page and enter your order number.</li>
                        <li>Select the item(s) you wish to return.</li>
                        <li>Print your return label.</li>
                        <li>Pack your items securely and send them back to us.</li>
                        <li>Once we receive your return, we will process your refund to your original payment method.</li>
                    </ul>
                    Please note that the customer is responsible for return shipping costs, unless the item was damaged or defective.
                </>
            ),
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, we are here to help! If you have any questions or need assistance with your order, you can reach out to our customer support team via email at support@brandname.com or by using our Live Chat feature on the website. Our team is available Monday through Friday, from 9 AM to 5 PM EST.",
        },
        {
            question: "Do you sell wholesale?",
            answer: "At this time, we do not offer wholesale purchasing. All products on our site are sold directly to customers for individual use. However, you can sign up for our newsletter to receive updates on upcoming product launches and sales.",
        },
        {
            question: "How do I care for my clothing?",
            answer: "Each product has specific care instructions that can be found on its label or on the product page. Generally, we recommend washing garments inside out, in cold water, and air drying to preserve their shape and color. Please refer to the care instructions for your specific item for the best results.",
        },
        {
            question: "Are your products made sustainably?",
            answer: "We are committed to sustainability! Many of our products are made using eco-friendly materials like organic cotton, recycled fabrics, and dyes that have a lower environmental impact. We also ensure that our manufacturing partners adhere to fair labor practices. For more information, check our Sustainability page.",
        },
    ];

    return (
        <div>
            <Discount />
            <Header />
            <div className="max-w-[1116px] mx-auto px-4 py-8 mt-[30px]">
                <h2 className="text-[35px] font-semibold mb-6">ECOMMERCE - FAQ</h2>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4 hover:bg-gray-100 hover:scale-110 duration-500">
                            <button onClick={() => handleToggle(index)}
                                className="w-full text-left text-lg font-medium text-gray-800 py-2"> {faq.question}
                            </button>
                            {activeIndex === index && (
                                <div className="mt-2 text-gray-600">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <FooterBG />
        </div>
    );
};

export default Faq;
