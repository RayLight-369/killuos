import { useMemo, useState } from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { services } from '../../Utils/Constants';
import { motion } from 'framer-motion';
// import Styles from "./Home.module.css";


const Home = () => {
  const isMobile = useMemo( () => window.innerWidth <= 768, [] );

  const variants = {
    animate: {
      y: 0,
      opacity: 1
    },
    initial: {
      y: -10,
      opacity: 0,
    },
    exit: {
      y: 10,
      opacity: 0,
      // clipPath: "polygon(52% 0, 54% 0, 53% 100%, 48% 100%)"
    }
  };

  return (
    <motion.section className=' font-[WorkSans]' variants={ variants } initial="initial" animate="animate" exit="exit">
      <div id='hero-section' className='md:h-[96vh] gap-5 w-screen bg-[var(--hero-bg)] relative overflow-hidden flex flex-col-reverse md:flex-row items-center px-5 pt-20 pb-14 md:px-16 md:py-0 md:rounded-b-[400%_100%]'>
        <div className='text-white relative w-full md:w-[40%] flex flex-col items-center md:items-start gap-7'>
          <h1 className='text-[1.55rem] text-center md:text-left md:text-[2.75rem] md:leading-[127%] font-[800]'>Your Success Story Starts with a Great <span className={ `text-[var(--active-link-color)] relative z-[12] after:content-[url(./Assets/Imgs/line.svg)] after:absolute after:scale-[.4] inline-block md:after:scale-100 after:h-9 after:overflow-hidden after:block after:top-[18px] md:after:top-6 after:left-[-49%] md:after:translate-x-0 md:after:left-0 after:z-10` }>Website</span>.</h1>
          <p className='text-center md:text-left text-[.90rem] md:text-[.95rem] text-[#F5F5F5] md:px-[4px]'>We create stunning, results-driven websites that elevate your brand and captivate your audience. Let us transform your vision into a powerful digital experience.</p>
          <button className='text-left w-[169px] px-8 py-2 bg-[var(--button-bg)] hover:shadow-md overflow-hidden transition-all duration-[250ms] hover:px-5 hover:-skew-y-3 hover:-skew-x-3 rounded-md relative after:transition-all after:duration-200 after:content-["→"] after:absolute after:text-[24px] after:-right-10 after:text-white after:block after:top-1/2 after:-translate-y-1/2 hover:after:right-5'>Get in touch</button>
        </div>
        { !isMobile ? (
          <img className='absolute h-full object-cover right-14' src="/Imgs/illustration.svg" alt="illustration" />
        ) : (
          <img className='relative md:absolute w-[95%] md:w-auto md:h-full object-cover md:right-14' src="/Imgs/illustrationsm.svg" alt="illustration" />
        ) }
      </div>

      <div className='w-screen h-fit py-9 px-5 md:px-12 relative'>
        <div className='flex flex-col gap-2 relative border-b-2 pb-10 [border-image:linear-gradient(to_right,white,#FFD7A8,white)_1]'>
          <img src="/Imgs/question.svg" className='h-[250px] absolute left-[calc(50%+30px)] -top-3 opacity-80' alt="" />
          <img src="/Imgs/question.svg" className='h-[200px] absolute right-1/2 top-[calc(50%-20px)] opacity-85 rotate-[35deg]' alt="" />
          <img src="/Imgs/arrow-pointer.svg" className='h-[200px] absolute right-[34%] top-[calc(100%-150px)] -rotate-[5deg] opacity-90' alt="" />
          <h1 className='text-center text-4xl font-[800] text-[var(--button-bg)] relative'>What do we do</h1>
          <div className='flex flex-col md:flex-row md:justify-between gap-6 items-center relative w-full z-20'>
            <div className='md:h-[60vh] w-full md:w-[50vw] relative'>
              {/* <img src="/Imgs/dots.png" alt="" className='h-full absolute right-[300px] object-cover' /> */ }
              <img src="/Imgs/illustration-2.svg" alt="" className='w-full md:w-auto md:h-full relative md:absolute object-cover' />
            </div>
            <p className='w-full text-center md:text-left md:w-[45vw] relative block -top-20 text-[19px] text-[#303030] leading-[160%]'>We create custom, high-performing websites that are visually appealing and user-friendly, helping your business stand out and grow online, Below are the services we provide</p>
          </div>
        </div>
      </div>

      <div id='services' className='w-screen h-fit py-10 px-4 flex flex-col md:px-20 md:grid md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-x-16 gap-y-24'>
        { Object.entries( services ).map( ( [ key, val ], i ) => (
          <ServiceCard key={ i } title={ key } description={ val.desc } tags={ val.tags } img={ val.img } />
        ) ) }
      </div>

    </motion.section>
  );
};

export default Home;