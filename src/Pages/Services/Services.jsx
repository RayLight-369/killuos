import React from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { services } from '../../Utils/Constants';

const Services = () => {
  return (
    <section id="services" className='font-[WorkSans] w-screen min-h-screen h-fit text-white pt-20 pb-14 md:pt-12 md:py-0 bg-[var(--hero-bg)]'>
      <div id='services' className='w-screen h-fit py-10 px-4 flex flex-col md:px-20 md:py-16 md:grid md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-x-16 gap-y-24'>
        { Object.entries( services ).map( ( [ key, val ], i ) => (
          <ServiceCard key={ i } title={ key } description={ val.desc } tags={ val.tags } img={ val.img } />
        ) ) }
      </div>
    </section>
  );
};

export default Services;