import React from 'react';
import projects from '../projectsData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className={ 'slide-next' }
            onClick={ onClick }
        />
    );
}

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className={ 'slide-prev' }
            onClick={ onClick }
        />
    );
}

const Projects = () => {

    const settings = {
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <div className="w-full">
                <header className='text-2xl font-bold'>
                    <h2>Projects</h2>
                </header>
                <div className='my-7 space-y-24'>
                    <Slider { ...settings }>
                        { projects.map((project, index) => (
                            <div key={ index }>
                                <article className='flex flex-wrap md:justify-between md:items-center p-8'>
                                    <img src={ project.image } width='768px' height='575px' loading='lazy' alt={ project.title } className={ index % 2 === 0 ? 'w-full rounded-lg md:w-6/12 shadow-lg' : 'w-full rounded-lg md:w-6/12 shadow-lg md:order-1' } />
                                    <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                                        <h3 className='font-bold uppercase text-2xl mb-5'>{ project.title }</h3>
                                        <p className="mt-6 text-xl font-light text-true-gray-500 antialiased">{ project.description }</p>
                                        <div className='flex flex-wrap items-center gap-2 pb-2'>
                                            { project.tools.map((disc, index) => (
                                                <span className='text-sm px-3 py-1 bg-gray-200 text-gray-500 rounded-full' key={ index }>
                                                    { disc }
                                                </span>
                                            )) }
                                        </div>
                                        <div className='w-auto flex space-x-5 relative'>
                                            <a href={ project.github } target='_blank' rel='noreferrer'>
                                                <svg className='w-6 h-6 fill-current text-gray-600' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                                </svg>
                                            </a>
                                            <a href={ project.link } target='_blank' rel='noreferrer'>
                                                {/* <img src='../images/icons/external_link.svg' alt='link to live website' width='24px' height='24px' /> */ }
                                                <svg className='w-6 h-6 stroke-current text-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        )) }
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Projects;