import React from 'react';
import { useQuery } from 'react-query';
import ProductCard from '../../Shared/ProductCard/ProductCard';

const FlashDeals = () => {

    const { data, isLoading } = useQuery("flashdeals", ()=> fetch("https://monirhabderabby.github.io/shoe-api/Shoe-API.json").then(res=> res.json()))

    if(isLoading){
        return;
    }
    return (
        <div className='px-6 md:px-12 my-24'>
            <h4 className='text-xl md:text-3xl text-red-600 font-semibold'>Flash Deals</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    data.map(product=> <ProductCard key={product.id} product={product} />)
                }
            </div>

        </div>
    );
};

export default FlashDeals;