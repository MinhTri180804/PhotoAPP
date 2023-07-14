import React from 'react';
import PropTypes from 'prop-types';

BannerComponent.propTypes = {
    
};

function BannerComponent(props) {
    return (
        <section className='banner bg-[url("/src/assets/background-img-1.jpg")] w-[100%] h-[500px] bg-cover bg-center bg-no-repeat relative'>
            <div className="content-banner absolute left-[50%] w-[100%] bottom-[10px] translate-x-[-50%] p-3 text-center text-white  xl:bottom-0">
                <span className="date-time inline-block p-2 md:text-[25px]">
                    September 1, 2023

                </span>
                <h4 className="title uppercase font-bold text-white text-[20px] md:text-[40px] xl:text-[30px] ">
                    latest wordpress support
                </h4>
            </div>
        </section>
    );
}

export default BannerComponent;