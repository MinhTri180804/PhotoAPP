import React from 'react';
import PropTypes from 'prop-types';
import HeaderComponent from '../header';
import BannerComponent from '../banner';

NotFound.propTypes = {
    
};

function NotFound(props) {
    return (
        <div>
            <HeaderComponent />
            <BannerComponent />
            <div className="p-[50px] text-center font-bold text-[40px]">NOT FOUND 404 ! </div>           
        </div>
    );
}

export default NotFound;