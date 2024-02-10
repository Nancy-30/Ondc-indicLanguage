import React, { useState, useEffect } from 'react';
import product0 from "../assets/shirt.jpeg";
import product1 from "../assets/shoes.jpeg";
import product2 from "../assets/sports.jpeg";
import product3 from "../assets/kurti.jpeg";
import product5 from "../assets/womenSports.jpeg";
import product4 from "../assets/wShoes.jpeg";


export default function Product({ language }) {

    const [products, setProducts] = useState([]);

    function getProductImage(index) {
        switch (index) {
            case 0:
                return product0;
            case 1:
                return product1;
            case 2:
                return product2;
            case 3:
                return product3;
            case 4:
                return product4;
            case 5:
                return product5;
            default:
                return null;
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await import(`../jsonData/${language}.json`);
                setProducts(productsData.default); // Assuming data is exported as default in the JSON files
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [language]);

    return (
        <div className='flex absolute top-24 text-black left-2'>
            {products.map((product, index) => (
                <div key={index} className='w-[15%] m-3 flex flex-col items-center cursor-pointer hover:shadow-xl shadow-gray-600 p-2 hover:bg-gray-200'>
                    <img src={getProductImage(index)} className='w-full' alt={product.heading} />
                    <h1 className='text-xl font-semibold'>{product.heading}</h1>
                    <p className='text-center'>{product.desc}</p>
                    <h2 className='text-xl font-semibold'>{product.price}</h2>
                </div>
            ))}
        </div>
    );
}
