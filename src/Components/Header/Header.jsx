import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { NavLinks } from '../../Utils/Constants';

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const handleScroll = () => {
    const y = window.scrollY;
    const header = document.getElementById( "header" );

    if ( y > 150 || ( pathName.includes( "service" ) && y > 50 ) ) {
      header.style.background = "#ffffffdd";
      header.style.backdropFilter = "blur(4px)";
      header.style.height = "4.5rem";

      header.querySelectorAll( "a:not(.active-link)" ).forEach( a => {
        a.style.color = "var(--hero-bg)";
        a.style.fontWeight = "600";
      } );

    } else {
      header.style.background = "none";
      header.style.backdropFilter = "none";
      header.style.height = "6rem";

      header.querySelectorAll( "a:not(.active-link)" ).forEach( a => {
        a.style.color = "white";
        a.style.fontWeight = "400";
      } );

    }
  };

  useEffect( () => {

    handleScroll();
    window.onscroll = handleScroll;

  }, [ location, location.pathname, pathName, ] );


  return (
    <>
      <header id='header' className='flex items-center py-2 px-14 h-24 w-screen transition-all duration-300 text-white z-50 fixed top-0'>
        <nav>
          <div className='flex gap-10'>
            { NavLinks.map( ( route, key ) => (
              <NavLink to={ route.path } key={ key } className={ ( { isActive } ) => `${ isActive ? "active-link text-[var(--active-link-color)_!important] after:scale-x-100" : "text-white after:scale-x-0" }  text-[13px] relative p-1 origin-left transition after:content-[''] after:absolute after:w-full after:h-[1px] after:rounded-[3px] after:bg-[var(--active-link-color)] after:bottom-[1px] after:left-0 after:origin-right after:scale-x-0 after:transition-transform after:duration-200 after:ease-in-out hover:text-[var(--active-link-color)] hover:after:origin-left hover:after:scale-x-100` }>
                { route.name }
              </NavLink>
            ) ) }
            {/* <a href="/#services" className="text-white text-[13px] relative p-1 origin-left transition after:content-[''] after:absolute after:w-full after:h-[1px] after:rounded-[3px] after:bg-[var(--active-link-color)] after:bottom-[1px] after:left-0 after:origin-right after:scale-x-0 after:transition-transform after:duration-200 after:ease-in-out hover:text-[var(--active-link-color)] hover:after:origin-left hover:after:scale-x-100">Services</a> */ }
          </div>
        </nav>
      </header >
      <Outlet />
    </>
  );
};

export default Header;