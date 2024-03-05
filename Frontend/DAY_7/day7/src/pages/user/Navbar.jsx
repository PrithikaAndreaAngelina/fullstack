import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';  // Import Link and useLocation
import logo from '../../assets/images/logo1.png';




const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const location = useLocation();  // Get the current location using useLocation




  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };




  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };




  return (
    <div>
      <nav className="bg-yellow-400 h-20 pt-2">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
                <span className="mx-8 self-center text-xl font-semibold whitespace-nowrap dark:text-white">ProPlannd</span>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/user/home"
                    className={`${
                      location.pathname === '/user/home' ? 'bg-blue-900 text-white' : 'text-blue-900'
                    } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/user/about"
                    className={`${
                      location.pathname === '/user/about' ? 'bg-blue-900 text-white' : 'text-blue-900 hover:bg-gray-100 hover:text-blue'
                    } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    About
                  </Link>
                  <Link
                    to="/user/services"
                    className={`${
                      location.pathname === '/user/services' ? 'bg-blue-900 text-white' : 'text-blue-900 hover:bg-gray-100 hover:text-blue'
                    } rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    All Services
                  </Link>
                </div>
              </div>
            </div>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" class="block w-40 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 z-50">
            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>
            <div className="relative ml-3 z-50">
              <div>
                <button
                  type="button"
                  onClick={toggleProfileDropdown}
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isProfileDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                  <Link to="/user/profile" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                    Your Profile
                  </Link>
                  <Link to="/user/bookings" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">
                    Bookings
                  </Link>
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      </nav>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden fixed  left-0 w-full bg-white border border-black-100 z-50`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
          </div>
          <Link
            to="/user/home"
            className={`${
              location.pathname === '/user/home' ? 'bg-blue-900 text-white' : 'text-blue-900'
            } block rounded-md px-3 py-2 text-base font-medium z-50`}
            aria-current="page"
          >
            Home
          </Link>
          <Link
            to="/user/about"
            className={`${
              location.pathname === '/user/about' ? 'bg-blue-900 text-white' : 'text-blue-300 hover:bg-gray-700 hover:text-white'
            } block rounded-md px-3 py-2 text-base font-medium z-50`}
          >
            About
          </Link>
          <Link
            to="/user/services"
            className={`${
              location.pathname === '/user/services' ? 'bg-blue-900 text-white' : 'text-blue-300 hover:bg-gray-700 hover:text-white'
            } block rounded-md px-3 py-2 text-base font-medium z-50`}
          >
            All Services
          </Link>
        </div>
      </div>
    </div>
  );
};




export default Navbar;