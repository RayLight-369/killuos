import React from 'react';

const ProductCard = () => {
  return (
    <div className='flex flex-col items-center h-fit w-11/12 overflow-hidden shadow-2xl bg-white rounded-e-lg lg:w-3/5 lg:flex-row lg:h-96'>
      <div className='h-full w-1/2 aspect-square rounded-full overflow-hidden lg:aspect-auto lg:rounded-none lg:rounded-s-lg'>
        <img className='h-full w-full aspect-auto' src="https://hips.hearstapps.com/hmg-prod/images/sansevieria-royalty-free-image-1642793822.jpg" alt="plant" />
      </div>
      <div className='flex flex-col items-center gap-5 w-full h-full rounded-e-lg p-8 lg:items-start lg:border-y-[1.3px] lg:border-r-[1.3px]'>
        <div className='flex flex-col gap-1 uppercase items-center lg:items-start'>
          <p className='font-sans text-3xl text-neutral-600'>Classic Plant</p>
          <p className='font-sans text-neutral-500'>Popular House Plant</p>
        </div>

        <div className='flex flex-col gap-5 items-center lg:items-start'>
          <p className='font-mono text-3xl text-neutral-500'>$10</p>
          <p className='font-sans text-neutral-500 text-sm text-center leading-6 lg:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quod iste eos quas possimus, dolorum porro ut amet consectetur quae molestias repellat maiores! Doloribus assumenda, alias exercitationem odit facilis maiores!</p>
        </div>

        <div className='flex gap-5 pt-3'>
          <button className='py-[10px] px-[14px] border-[1.4px] border-neutral-300 text-neutral-800 transition hover:bg-[#D5DDD4] hover:text-lime-900 hover:border-none'>ADD TO CART</button>
          <button className='py-[10px] px-[14px] border-[1.4px] border-neutral-300 text-neutral-800 transition hover:bg-[#D5DDD4] hover:text-lime-900 hover:border-none'>WISHLIST</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;