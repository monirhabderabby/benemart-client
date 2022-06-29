import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShopify } from "@fortawesome/free-brands-svg-icons"

const Logo = () => {
    return (
        <div className='text-white bg-primary px-2 py-1 rounded-md'>
            <FontAwesomeIcon icon={faShopify}/> BeneMart
        </div>
    );
};

export default Logo;