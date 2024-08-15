import { useMemo, useState } from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
// import Styles from "./Home.module.css";

const Home = () => {

  const Services = useMemo( () => (
    {
      "Front-end Web Development": {
        tags: [ "UI", "UX", "Front-end Development", "Web Development", "Web Application" ],
        desc: "Our website development service focuses on building responsive, high-quality websites tailored to your brand's needs. We ensure a seamless user experience and robust functionality, helping your business thrive online."
      },
      "Web Designing": {
        tags: [ "UI", "UX", "Front-end", "Web Design", "Designing" ],
        desc: "Our website designing service focuses on design high-quality websites' visuals tailored to your brand's needs. We ensure a good looking user interface and responsive design, helping your business thrive online."
      },
    }
  ), [] );



  return (
    <section className=' font-[WorkSans]'>
      <div className='h-[96vh] w-screen bg-[var(--hero-bg)] relative overflow-hidden flex flex-row items-center px-16'>
        <div className='text-white relative w-[40%] flex flex-col gap-7'>
          <h1 className='text-[2.75rem] leading-[127%] font-[800]'>Your Success Story Starts with a Great <span className={ `text-[var(--active-link-color)] relative z-[12] after:content-[url(./Assets/Imgs/line.svg)] after:absolute after:h-9 after:overflow-hidden after:block after:top-6 after:left-0 after:z-10` }>Website</span>.</h1>
          <p className='text-[.95rem] text-[#F5F5F5] px-[4px]'>We create stunning, results-driven websites that elevate your brand and captivate your audience. Let us transform your vision into a powerful digital experience.</p>
          <button className='text-left w-[169px] px-8 py-2 bg-[var(--button-bg)] hover:shadow-md overflow-hidden transition-all duration-[250ms] hover:px-5 hover:-skew-y-3 hover:-skew-x-3 rounded-md relative after:transition-all after:duration-200 after:content-["→"] after:absolute after:text-[24px] after:-right-10 after:text-white after:block after:top-1/2 after:-translate-y-1/2 hover:after:right-5'>Get in touch</button>
        </div>
        <img className='absolute h-full object-cover right-14' src="/Imgs/illustration.svg" alt="illustration" />
      </div>

      <div className='w-screen h-fit py-9 px-12 relative'>
        <div className='flex flex-col gap-2 relative border-b-2 pb-10 [border-image:linear-gradient(to_right,white,#FFD7A8,white)_1]'>
          <img src="/Imgs/question.svg" className='h-[250px] absolute left-[calc(50%+30px)] -top-3 opacity-80' alt="" />
          <img src="/Imgs/question.svg" className='h-[200px] absolute right-1/2 top-[calc(50%-20px)] opacity-85 rotate-[35deg]' alt="" />
          <img src="/Imgs/arrow-pointer.svg" className='h-[200px] absolute right-[34%] top-[calc(100%-150px)] -rotate-[5deg] opacity-90' alt="" />
          <h1 className='text-center text-4xl font-[800] text-[var(--button-bg)] relative'>What do we do</h1>
          <div className='flex flex-row justify-between items-center relative w-full z-20'>
            <div className='h-[60vh] w-[50vw] relative'>
              {/* <img src="/Imgs/dots.png" alt="" className='h-full absolute right-[300px] object-cover' /> */ }
              <img src="/Imgs/illustration-2.svg" alt="" className='h-full absolute object-cover' />
            </div>
            <p className='w-[45vw] relative block -top-20 text-[19px] text-[#303030] leading-[160%]'>We create custom, high-performing websites that are visually appealing and user-friendly, helping your business stand out and grow online, Below are the services we provide</p>
          </div>
        </div>
      </div>

      <div id='services' className='w-screen h-fit py-10 px-20 grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-x-16 gap-y-24'>
        { Object.entries( Services ).map( ( [ key, val ], i ) => (
          <ServiceCard key={ i } title={ key } description={ val.desc } tags={ val.tags } />
        ) ) }
      </div>

    </section>
  );
};

export default Home;