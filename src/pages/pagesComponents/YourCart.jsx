import React, { useEffect, useState } from 'react';
import CartCounter from './CartCounter';




const YourCart = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const getAllProductsAndUserCart = async () => {
        setIsLoading(true);
        try {
            const products_res = await fetch('https://fakestoreapi.com/products')
            const products_data = await products_res.json()
            

            const cart_res = await fetch('https://fakestoreapi.com/carts/1')
            const cart_products = await cart_res.json()


            let cart_products_data = []

            for (let index = 0; index < cart_products.products.length; index++) {
                const element = cart_products.products[index];

                const foundProduct = products_data.find((product) => product.id === element.productId);
                if (foundProduct) {
                    cart_products_data.push({foundProduct, ...foundProduct, quantity: 1,});
                }
            }

            setProducts(cart_products_data);

            const newTotalPrice = cart_products_data.reduce((acc, product) => acc + product.price, 0);
            setTotalPrice(newTotalPrice);

        } catch (error) {
            console.log(error)
        }finally {
            setIsLoading(false)
        }
    };


    useEffect(() => {
        getAllProductsAndUserCart()
    }, []);

    const updateProductQuantity = (productId, newQuantity) => {
        const updatedProducts = products.map(product => 
            product.id === productId ? { ...product, quantity: newQuantity } : product
        );
        setProducts(updatedProducts);

        const newTotalPrice = updatedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        setTotalPrice(newTotalPrice);
    };

    const removeProduct = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);

        // Update total price
        const newTotalPrice = updatedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        setTotalPrice(newTotalPrice);
    };

    return (
        <div>
            <div className='flex justify-between items-center max-w-[1116px] m-auto mt-[56px]'>
                <div>
                    <div>
                        <h5 className='text-[#0E1422] font-bold mt-[16px]'>Your cart</h5>
                        <hr className='mt-[18px] w-[628px]'></hr>
                    </div>
                    {products.map((product, index) => (
                        <div key={index} className="flex justify-between mt-[48px] max-w-[628px]">
                            <div className="flex gap-[32px] ">
                                <img className="rounded-[4px] transition hover:scale-110 hover:-translate-y-1 duration-500 w-[100px] h-[100px]" src={product.image} alt={product.alt} />
                                <div className='w-[300px]'>
                                    <p className="text-[#0E1422] font-semibold mt-[9px] ">{product.title}</p>
                                    <div className="flex items-center mt-[6px] gap-[8px]">
                                        <p className="text-[#5C5F6A]">Color: </p>
                                        <div className="w-[12px] h-[12px] rounded-full"></div>
                                        <p className="text-[#5C5F6A]">—</p>
                                        <p className="text-[#5C5F6A]">Size:</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex gap-[32px] mr-[16px]">
                                    <p className="font-semibold mt-2">${product.price}</p>
                                    <CartCounter count={product.quantity} onQuantityChange={(newQuantity) => updateProductQuantity(product.id, newQuantity)} />
                                </div>
                                <button className="w-[40px] h-[40px] transition hover:scale-110 hover:-translate-y-1 duration-500" aria-label="Remove Item" 
                                onClick={() => removeProduct(product.id)}>
                                    <img src="/images/cartx.svg" alt="Remove item" />
                                </button>
                            </div>
                        </div>
                    ))}
                    
                </div>
                <div className='border-solid border-2 rounded-[4px] border-[#E6E7E8] h-[430px] py-[32px] px-[24px]'>
                    <h4 className='text-[#0E1422] font-semibold'>Order Summary</h4>
                    <div>
                        <div className='flex justify-between mt-[40px]'>
                            <p className='text-[#5C5F6A]'>Subtotal</p>
                            <p className='text-[#0E1422] font-semibold'>${totalPrice.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between mt-[12px]'>
                            <p className='text-[#5C5F6A]'>Shipping: </p>
                            <p className='text-[#0E1422] font-semibold'>Free</p>
                        </div>
                        <div className='flex justify-between mt-[12px]'>
                            <p className='text-[#5C5F6A]'>Tax: </p>
                            <p className='text-[#0E1422] font-semibold'>$ 3.00</p>
                        </div>
                    </div>
                    <hr className='mt-[24px]'></hr>
                    <div className='flex justify-between mt-[24px]'>
                        <p className='text-[14px] text-[#0E1422] font-semibold'>Total</p>
                        <p className='text-[14px] text-[#0E1422] font-semibold'>${(totalPrice + 3).toFixed(2)}</p>
                    </div>
                    <a href="#"><button className='w-[296px] h-[44px] mt-[32px] rounded-[4px] bg-[#0E1422] text-white hover:scale-110 duration-500' type="submit" value="Submit">Checkout</button></a>

                    <div className='border-b w-[110px] border-[#0E1422] mt-[15%] ml-[50%] transform translate-x-[-50%] translate-y-[-50%] hover:scale-110 duration-500'>
                        <a href='#' className='text-[#0E1422] font-semibold mt-[32px] text-[12px]'>Continue Shopping</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default YourCart;