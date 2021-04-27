import React from 'react';
import photo from '../images/photolab_me_5.jpeg';

const Cta = () => {
    return (
        <>
            <div className="w-full lg:w-2/3 md:w-1/2 px-10 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                {/* <h1 className="font-bold uppercase text-2xl mb-5">Mens's Ragged <br/>Waterproof Jacket</h1>
                <p className="text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Eos, voluptatum dolorum! 
                    Laborum blanditiis consequatur, voluptates, sint enim fugiat saepe, dolor fugit, 
                    magnam explicabo eaque quas id quo porro dolorum facilis...
                </p> */}
                <h2 className="text-2xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        Paweł Pukszta
                    </span>
                    <span className="block text-indigo-500">
                        Front-end developer
                    </span>
                </h2>
                <p className="text-xl mt-4 font-light text-true-gray-500 antialiased">
                    I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Resume
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/2 px-10 mb-10 md:mb-0 hidden md:block">
                <div className="relative">
                    <img src={ photo } alt="Paweł Pukszta" className="w-full relative z-10" />
                </div>
            </div>

            {/* <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        Paweł Pukszta
                    </span>
                    <span className="block text-indigo-500">
                        Front-end developer
                    </span>
                </h2>
                <p className="text-xl mt-4 text-gray-400">
                    I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Resume
                        </button>
                    </div>
                </div>
            </div> */}
            {/* <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
                <div className="text-6xl font-semibold text-gray-900 leading-none">Bring all your work together</div>
                <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">A better experience for yout attendees and less stress yout team.</div>
                <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                Download for Free
                </button>
            </div> */}
            {/* <img src={ photo } alt="Paweł Pukszta" className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0" /> */ }
        </>
    );
};

export default Cta;