import React from 'react';

const inputClassName = "px-3 py-1 text-sm outline-none border-b-2 transition-all duration-[240ms] hover:border-b-4 focus:border-[var(--active-link-color)]";

const Contact = () => {
  return (
    <section id="contact" className='font-[WorkSans] w-screen h-fit text-white'>
      <div id='hero-section' className='md:h-[96vh] gap-5 w-screen bg-[var(--hero-bg)] relative overflow-hidden flex flex-col-reverse md:flex-row items-center px-5 pt-20 pb-14 md:px-16 md:py-0'>
        <div className='text-white relative md:-top-12 w-full md:w-[40%] flex flex-col items-center md:items-start gap-7'>
          <h1 className='text-[1.55rem] text-center md:text-left md:text-[2.75rem] md:leading-[127%] font-[800]'><span className={ `text-[var(--active-link-color)] relative z-[12] inline-block` }>Connect</span> with us Anytime, Anywhere.</h1>
          <p className='text-center md:text-left text-[.90rem] md:text-[.95rem] text-[#F5F5F5] md:px-[4px]'>Boost your online presence—contact our web team to reach your goals.</p>
        </div>

        <img className='md:absolute w-[45vw] md:top-[calc(50%-3rem)] md:-translate-y-1/2 object-cover md:right-12' src="/Imgs/contactillustration.png" alt="illustration" />
        <div className='md:absolute w-[45vw] h-full aspect-square bg-[radial-gradient(50%_50%_at_50%_50%,rgba(31,29,27,0.15)_0%,#1F1D1B_100%)]  md:top-[calc(50%-3rem)] md:-translate-y-1/2 md:right-12'></div>

      </div>

      <div id="contact-form" className='relative bg-[var(--bg-light)] flex justify-center items-center'>
        <div className='relative -top-40 left-20  flex items-center'>
          <div className='absolute -left-40 w-[24vw] h-[calc(65vh-80px)] bg-[var(--hero-bg)] shadow-xl'></div>
          <div className='md:w-[65vw] md:h-[65vh] bg-white shadow-2xl flex pl-[calc(24vw-10rem+30px)] pr-32 py-[40px]'>
            <div className='text-[var(--hero-bg)] w-full flex flex-col gap-8 relative'>
              <h1 className='text-2xl font-bold'>Contact us</h1>
              <div className='relative w-full h-full flex flex-col gap-5'>
                <div className='w-full flex justify-between gap-10 h-fit'>
                  <input type="text" placeholder='Enter your Name' className={ inputClassName + " flex-1" } />
                  <input type="text" placeholder='Enter your Email' className={ inputClassName + " flex-1" } />
                </div>
                <textarea type="text" placeholder='Enter Message...' className={ inputClassName + " max-h-[calc(100%-160px)_!important] min-h-[30px]" } />

              </div>
              <button className='absolute bottom-0 rounded w-24 px-3 py-[6px] border-none outline-none bg-[var(--button-bg)] text-white transition-all hover:scale-[1.03] hover:shadow-xl'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
;;;
