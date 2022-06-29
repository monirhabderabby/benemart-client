import React from 'react';
import { useQuery } from 'react-query';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const FlashDeals = () => {

    const { data, isLoading } = useQuery("flashdeals", ()=> fetch("https://monirhabderabby.github.io/shoe-api/Shoe-API.json").then(res=> res.json()))

    if(isLoading){
        return;
    }
    return (
        <div className='px-6 md:px-12 my-24 max-w-[1920px] mx-auto'>
            <h4 className='text-xl md:text-3xl inline-block text-red-600 font-semibold hover:text-primary transition-all cursor-pointer'>Flash Deals</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
                {
                    data.slice(0,4).map(product=> <ProductCard key={product.id} product={product} />)
                }
            </div>

        </div>
    );
};

export default FlashDeals;