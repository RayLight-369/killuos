import React from 'react';


const Tag = ( { tag } ) => {

  return (
    <p className='shadow-lg py-1 px-3 rounded bg-[var(--active-link-color)] text-white transition-all ease-out duration-[400ms] hover:shadow-xl hover:scale-[1.04]'>{ tag }</p>
  );

};

const ServiceCard = ( { title, description, tags } ) => {
  return (
    <div className='shadow-xl p-11 rounded-xl bg-[#FFFCF9] flex flex-col gap-9 transition-all ease-out duration-[400ms] hover:shadow-2xl hover:scale-[1.04]'>
      <div className='flex gap-4 items-center'>
        <div className='w-[70px] h-full aspect-square shadow-lg flex justify-center items-center rounded-full p-3'>
          <img src="/Imgs/circle.svg" alt="" />
        </div>
        <h1 className='text-xl font-bold text-[#272727]'>{ title }</h1>
      </div>
      <p className='text-[#303030] text-[.925rem] leading-[1.75rem]'>{ description }</p>
      <div className='flex gap-3 flex-wrap'>
        { tags && tags.map( ( tag, i ) => (
          <Tag key={ i } tag={ tag } />
        ) ) }
      </div>
    </div>
  );
};

export default ServiceCard;