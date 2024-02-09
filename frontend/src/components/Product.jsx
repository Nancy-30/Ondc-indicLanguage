// import React from 'react';
// import Shirt from "../assets/shirt.jpeg";
// import Shoes from "../assets/shoes.jpeg";
// import Sports from "../assets/sports.jpeg";
// import Kurti from "../assets/kurti.jpeg";
// import Womensports from "../assets/womenSports.jpeg";
// import Wshoes from "../assets/wShoes.jpeg";

// export default function Product({ language }) {
//     const products = [
//         {
//             image: Shirt,
//         },
//         {
//             image: Shoes,

//         },
//         {
//             image: Sports,

//         },
//         {
//             image: Kurti,

//         },
//         {
//             image: Wshoes,

//         },
//         {
//             image: Womensports,

//         },
//     ];

//     return (
//         <div className='flex'>
//             {products.map((product, index) => (
//                 <div key={index} className='w-[15%] m-3 flex flex-col items-center cursor-pointer hover:shadow-xl shadow-gray-600 p-2 hover:bg-gray-200'>
//                     <img src={product.image} className='w-full' alt={product.heading} />
//                     <h1 className='text-xl font-semibold'>{product.heading}</h1>
//                     <p>{product.desc}</p>
//                     <h2 className='text-xl font-semibold'>{product.price}</h2>
//                 </div>
//             ))}
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import "./products.json"


export default function Product({ language }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className='flex'>
            {products.map((product, index) => (
                <div key={index} className='w-[15%] m-3 flex flex-col items-center cursor-pointer hover:shadow-xl shadow-gray-600 p-2 hover:bg-gray-200'>
                    <img src={product.image} className='w-full' alt={product.heading} />
                    <h1 className='text-xl font-semibold'>{product.heading}</h1>
                    <p>{product.desc}</p>
                    <h2 className='text-xl font-semibold'>{product.price}</h2>
                </div>
            ))}
        </div>
    );
}
