import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
    
    return (
        <nav className="flex items-center justify-between">
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                    <svg className="w-10 h-10 mr-1 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                    </svg>
                PP
              </div>
            </div>
            <div className="flex items-center justify-center">
                <Link
                    smooth
                    to={'/#about'}
                    className="sm:flex sm:items-center sm:justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                    activeClassName="selected"
                >
                    About me
                </Link>
                <Link
                    smooth
                    to={'/#projects'}
                    className="sm:flex sm:items-center sm:justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
                    activeClassName="selected"
                >
                    Projects
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;