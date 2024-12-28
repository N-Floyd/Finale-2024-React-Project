import React from 'react'
import Discount from '../../components/Discount';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import FooterBG from './FooterBG';

const PrivacyPolicy = () => {
    return (
        <div>
            <Discount />
            <Header />
            <div className="mx-auto px-4 py-8 max-w-[1116px]">
                <h1 className="text-[40px] font-bold text-center mb-6 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">ECOMMERCE Privacy Policy</h1>
                <p className="text-center text-gray-600 mb-4 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">Effective Date: January 1, 2021.</p>

                <section className="mb-8 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">Introduction :</h2>
                    <p className="text-gray-700">
                        At ECOMMERCE, your privacy is a top priority. We are committed to protecting your personal information and ensuring that you have a positive shopping experience. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website and services. By accessing or using our website, you agree to the terms of this Privacy Policy.
                    </p>
                </section>

                <section className="mb-8 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
                    <p className="text-gray-700 mb-2">When you shop on ECOMMERCE, we may collect the following types of information:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li><strong>Personal Information:</strong> This includes your name, email address, phone number, billing and shipping address, payment details, and any other information you provide when placing an order or subscribing to our services.</li>
                        <li><strong>Account Information:</strong> If you create an account, we collect information related to your account such as your username, password, order history, and preferences.</li>
                        <li><strong>Payment Information:</strong> We collect payment details (such as credit card or PayPal information), which are securely processed by trusted third-party payment providers. ECOMMERCE does not store full credit card numbers.</li>
                        <li><strong>Non-personally Identifiable Information:</strong> We collect non-PII such as IP addresses, device types, browser information, and data related to your browsing behavior on our site (e.g., pages viewed, products viewed, time spent on the site).</li>
                        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your shopping experience, improve site functionality, and track website performance.</li>
                    </ul>
                </section>

                <section className="mb-8 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
                    <p className="text-gray-700 mb-2">We use the information we collect for the following purposes:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li><strong>Order Processing:</strong> To process and fulfill your orders, including billing, shipping, and handling returns or exchanges.</li>
                        <li><strong>Customer Support:</strong> To provide customer support, respond to inquiries, resolve any issues, and improve our services.</li>
                        <li><strong>Marketing Communications:</strong> With your consent, we may send you promotional emails, special offers, and updates on new products or services. You can opt-out of marketing emails at any time by clicking "unsubscribe" or contacting us directly.</li>
                        <li><strong>Improvement of Services:</strong> To analyze site traffic, understand customer preferences, and improve website functionality.</li>
                        <li><strong>Legal Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our terms and conditions.</li>
                    </ul>
                </section>

                <section className="mb-8 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">3. Sharing Your Information</h2>
                    <p className="text-gray-700 mb-2">We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li><strong>Service Providers:</strong> We may share your information with trusted third-party companies that assist us in operating our website, processing payments, fulfilling orders, or delivering products (e.g., payment processors, shipping companies).</li>
                        <li><strong>Legal Requirements:</strong> We may disclose your information to comply with applicable laws, respond to lawful requests by public authorities, or protect our rights, privacy, safety, or property.</li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
                    </ul>
                </section>

                <section className="mb-8 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">4. Data Security</h2>
                    <p className="text-gray-700">
                        We take reasonable precautions to protect your personal data, including the use of SSL (Secure Socket Layer) encryption to safeguard sensitive data. However, no online transaction or data storage system can be guaranteed to be 100% secure. You are responsible for keeping your login credentials confidential.
                    </p>
                </section>

                <section className="mb-8 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">5. Your Rights</h2>
                    <p className="text-gray-700 mb-2">You have the following rights concerning your personal information:</p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li><strong>Access and Correction:</strong> You can access, review, and update your personal information through your account or by contacting us.</li>
                        <li><strong>Deletion:</strong> You can request to delete your personal data, subject to any legal retention requirements.</li>
                        <li><strong>Opt-Out of Marketing:</strong> You can opt-out of receiving marketing emails at any time by clicking "unsubscribe" or by contacting us directly.</li>
                        <li><strong>Do Not Track:</strong> Some browsers may allow you to send "Do Not Track" signals. We honor those settings and will not track your browsing activity if you choose this option.</li>
                    </ul>
                </section>

                <section className="mb-8 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">6. Cookies and Tracking Technologies</h2>
                    <p className="text-gray-700">
                        We use cookies and similar tracking technologies to improve your browsing experience and to personalize content and ads. Cookies are small data files stored on your device. You can choose to accept or decline cookies by adjusting your browser settings. Please note that declining cookies may affect your experience on our website.
                    </p>
                </section>

                <section className="mb-8 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">7. Third-Party Links</h2>
                    <p className="text-gray-700">
                        Our website may contain links to other websites or services that are not operated by us. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                </section>

                <section className="mb-8 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">8. Children’s Privacy</h2>
                    <p className="text-gray-700">
                        ECOMMERCE does not knowingly collect personal information from individuals under the age of 13. If we discover that we have collected information from a child under 13, we will take immediate steps to delete that information.
                    </p>
                </section>

                <section className="mb-8 cursor-grab hover:-translate-y-1 hover:scale-110 duration-500">
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">9. Changes to This Privacy Policy</h2>
                    <p className="text-gray-700">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date". We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                    </p>
                </section>

                <Link to="/contacth" >
                <section className='cursor-pointer hover:-translate-y-1 hover:scale-110 duration-500'>
                    <h2 className="text-[25px] font-semibold text-gray-800 mb-4">10. Contact Us</h2>
                    <p className="text-gray-700">
                        If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please contact us at:
                    </p>
                    <Link to="/contacth"><p className="text-gray-700 text-[20px] mt-[5px] cursor-pointer transition hover:scale-110 duration-500 hover:animate-bounce"><strong>ecommerce.com</strong></p></Link>
                </section>
                </Link>
            </div>
            <FooterBG />
        </div>
    )
}

export default PrivacyPolicy;