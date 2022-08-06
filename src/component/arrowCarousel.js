import React from 'react';

const dots = {
    height: '35px',
    width: '35px',
    borderRadius: '50%',
    display: 'inline-block',
    boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.15)",
};

const SampleNextArrow = props => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, ...dots, right: '-15px' }}
            onClick={onClick}
        >
        </div>
    )
}

const SamplePrevArrow = props => {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, ...dots, left: '-15px', zIndex: '2' }}
            onClick={onClick}
        >
        </div>
    )
}

const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
}


export { settings }