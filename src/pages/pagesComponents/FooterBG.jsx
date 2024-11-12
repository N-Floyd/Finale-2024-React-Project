 import { Link } from 'react-router-dom';

 const FooterBG = () => {
   const socialLinks = [
     { href: "https://github.com/", img: "/images/githubicon.svg", alt: "GitHub" },
     { href: "https://www.instagram.com/", img: "/images/instaicon.svg", alt: "Instagram" },
     { href: "https://www.youtube.com/", img: "/images/youtubeicon.svg", alt: "YouTube" }
   ];
 
   const supportLinks = [
     { href: "#", text: "FAQ" },
     { href: "#", text: "Terms of use" },
     { href: "#", text: "Privacy Policy" }
   ];
 
   const companyLinks = [
     { href: "#", text: "About us" },
     { href: "#", text: "Contact" },
     { href: "#", text: "Careers" }
   ];
 
   const shopLinks = [
     { href: "#", text: "My Account" },
     { href: "#", text: "Checkout" },
     { href: "#", text: "Cart" }
   ];
 
   const paymentIcons = [
     { src: "/images/mastercard.svg", alt: "Mastercard" },
     { src: "/images/amex.svg", alt: "American Express" },
     { src: "/images/visa.svg", alt: "Visa" }
   ];
 
   return (
     <footer className="pt-[88px] bg-[#F6F6F6]">
       <div className="h-[429px]">
         <div className="flex justify-between items-center max-w-[1116px] m-auto">
           <div className="mt-[88px]">
             <img className="w-[168px] h-[44px]" src="/images/footerloogo.png" alt="DevCut Logo" />
             <p className="text-[#5C5F6A] w-[272px] mt-[12px]"> DevCut is a YouTube channel for practical project-based learning.</p>
             <div className="flex justify-between w-[120px] mt-[32px]">
               {socialLinks.map(({ href, img, alt }) => (
                 <Link to={href} key={alt} className="transition hover:scale-110 hover:-translate-y-1 duration-500">
                   <img src={img} alt={alt} />
                 </Link>
               ))}
             </div>
           </div>
           <div className="grid grid-row-3 grid-flow-col gap-16 mt-10">
             <div className="grid gap-[40px]">
               <p className="text-[#878A92]">SUPPORT</p>
               <div className="grid gap-[16px]">
                 {supportLinks.map(({ href, text }) => (
                   <a
                     href={href} key={text} className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]">{text}
                   </a>
                 ))}
               </div>
             </div>
             <div className="grid gap-[40px]">
               <p className="text-[#878A92] text-[14px]">COMPANY</p>
               <div className="grid gap-[16px]">
                 {companyLinks.map(({ href, text }) => (
                   <a
                     href={href} key={text} className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]"> {text}
                   </a>
                 ))}
               </div>
             </div>
             <div className="grid gap-[40px]">
               <p className="text-[#878A92]">SHOP</p>
               <div className="grid gap-[16px]">
                 {shopLinks.map(({ href, text }) => (
                   <a
                     href={href} key={text} className="transition hover:scale-110 hover:-translate-y-1 duration-500 text-[#5C5F6A]"> {text}
                   </a>
                 ))}
               </div>
             </div>
           </div>
           <div>
             <p className="text-[#878A92]">ACCEPTED PAYMENTS</p>
             <div className="flex justify-between opacity-[80%] mt-[40px]">
               {paymentIcons.map(({ src, alt }) => (
                 <a key={alt} href="#" className="transition hover:scale-110 hover:-translate-y-1 duration-500">
                   <img src={src} alt={alt} />
                 </a>
               ))}
             </div>
           </div>
         </div>
       </div>
 
       <div className="items-center max-w-[1116px] m-auto h-[79px]">
         <hr />
         <p className="text-[#5C5F6A] flex justify-center mt-[27px]">© 2023 DevCut. All rights reserved.</p>
       </div>
     </footer>
   );
 };
 
 export default FooterBG;
    