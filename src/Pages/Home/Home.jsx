import { useState } from 'react';
// import Styles from "./Home.module.css";

const Home = () => {
  return (
    <section>
      <div className='h-[calc(100vh)] w-screen bg-[var(--hero-bg)] relative overflow-hidden flex flex-row items-center px-[50px]'>
        <div className='text-white relative w-[40%] flex flex-col gap-6'>
          <h1 className='text-5xl leading-[127%] font-[WorkSans] font-[800]'>Your Success Story Starts with a Great <span className={ `text-[var(--active-link-color)] relative z-[12] after:content-[url(./Assets/Imgs/line.svg)] after:absolute after:h-9 after:overflow-hidden after:block after:top-6 after:left-0 after:z-10` }>Website</span>.</h1>
          <p className='font-[WorkSans] text-[#F5F5F5] px-[4px]'>We create stunning, results-driven websites that elevate your brand and captivate your audience. Let us transform your vision into a powerful digital experience.</p>
          <button className='text-left w-40 px-8 py-2 bg-[var(--button-bg)] hover:shadow-md overflow-hidden transition-all duration-[250ms] hover:px-5 hover:-skew-y-3 hover:-skew-x-3 rounded-md relative after:transition-all after:duration-200 after:content-["→"] after:absolute after:text-[20px] after:-right-10 after:text-white after:block after:top-1/2 after:-translate-y-1/2 hover:after:right-5'>Get in touch</button>
        </div>
        <img className='absolute h-full top-0 right-5' src="/Imgs/illustration.svg" alt="illustration" />
      </div>

    </section>
  );
};

export default Home;