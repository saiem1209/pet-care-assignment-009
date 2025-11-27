import React from 'react';

import error from '../assets/error-404.png'

const Error = () => {
    return (
        <div >
            <img className='mx-auto my-auto' src={error} alt="" />
        </div>
    );
};

export default Error;