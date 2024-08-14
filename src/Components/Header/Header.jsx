import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavLinks } from '../../Utils/Constants';

const Header = () => {
  return (
    <>
      <header className='flex py-6 px-14 h-24 w-screen text-white absolute top-0 z-10'>
        <nav>
          <div className='flex gap-10'>
            { NavLinks.map( ( route, key ) => (
              <NavLink to={ route.path } key={ key } className={ ( { isActive } ) => `${ isActive ? "text-[var(--active-link-color)] after:scale-x-100" : "text-white after:scale-x-0" }  text-[13px] relative p-1 origin-left transition after:content-[''] after:absolute after:w-full after:h-[1px] after:rounded-[3px] after:bg-[var(--active-link-color)] after:bottom-[1px] after:left-0 after:origin-right after:scale-x-0 after:transition-transform after:duration-200 after:ease-in-out hover:text-[var(--active-link-color)] hover:after:origin-left hover:after:scale-x-100` }>
                { route.name }
              </NavLink>
            ) ) }
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;