import { Facebook } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { SocialLinks } from '../Utils/Constants';

const Footer = () => {

  const FooterContent = [
    {
      heading: "Business",
      links: [ "Home_/#", "Services_/#services" ]
    },
    {
      heading: "Privacy Policy",
      links: []
    },
    {
      heading: "FAQs & Help",
      links: [ "Contact Now_/#contact" ]
    },
    {
      heading: "Follow Us",
      links: SocialLinks
    }
  ];

  return (
    <footer className='flex flex-col w-full mt-10 bg-[var(--hero-bg)] p-10 gap-14'>
      <div className='flex gap-14 flex-col md:flex-row items-center md:items-stretch'>
        <a href="#" className='block w-[32%] md:w-[14%]'>
          <img src="/Imgs/killogo.svg" alt="" className='w-full h-auto' />
        </a>
        <div className='flex-1 w-full flex flex-col items-center md:items-start md:grid md:grid-cols-4 gap-14 md:gap-1 justify-center justify-items-center'>
          { FooterContent.map( ( col, i ) => (
            <div className='flex flex-col gap-7 text-[#fafafa]'>
              <h1 className='text-md font-semibold relative after:content-[""] after:absolute after:w-[60%] after:h-[2px] after:bg-[var(--button-bg)] after:rounded-md after:left-1/2 after:-translate-x-1/2 md:after:-translate-x-0 md:after:left-0 after:bottom-0'>{ col.heading }</h1>
              <div className='flex flex-col gap-2 md:gap-4 text-sm items-center md:items-start'>
                {
                  col.links.map( ( link, i ) => {
                    if ( typeof link == "string" ) return <a key={ i } href={ link.split( "_" )[ 1 ] }>{ link.split( "_" )[ 0 ] }</a>;
                    else return <div className='flex gap-3'>
                      <a href={ link.url }>{ link.icon }</a>
                    </div>;
                  } )
                }
              </div>
            </div>
          ) ) }
        </div>
      </div>
      <p className="attribution w-full text-center text-white">
        All illustrations used on this site were <a href="https://freepik.com" className='underline' target='_blank'>Designed by Freepik</a>
      </p>
    </footer>
  );
};

export default Footer;