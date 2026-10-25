import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const products = await res.json();

     return (
    <div className='overflow-hidden border-y border-gray-100 bg-white py-2'>
         <MarqueeText className="py-1" direction="right" duration={10} pauseOnHover={true}>
        <Link href={`/products/${products.id}`} className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap px-6 text-xs transition hover:bg-gray-50" >{
             products.map((product => <span key='product.id' href={`/products/${product.id}`} >
            
             <span>{product.image}</span>

             <span className="text-gray-800 font-bold hover:text-green-700 pr-2">
              {product.nameBn}
            </span>
            


            <span className="text-gray-600 pr-2">
              {product.today} টাকা/
              {product.unit === "kg" ? "কেজি" : product.unit}
            </span>

           {product.change.dir === "up" && (
              <span className="font-medium text-red-500">
                ▲ {(product.change.pct)}%
              </span>
            )}

            {product.change.dir === "down" && (
              <span className="font-medium text-green-600">
                ▼ {(product.change.pct)}%
              </span>
            )}

            {product.change.dir === "flat" && (
              <span className="text-gray-400">— ০%</span>
            )}


             
             


             </span>))
             }
        </Link>
        </MarqueeText>
    </div>
  );
};

export default Marquee;