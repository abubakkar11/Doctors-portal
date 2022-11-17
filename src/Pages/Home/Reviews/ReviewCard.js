import React from 'react';

const ReviewCard = ({ review }) => {
    const { img, name, body, location } = review
    return (
        <div className="card shadow-xl mt-8 p-3">
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div className='flex items-center ml-9'>
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt='' />
                </div>
                <div className='ml-3'>
                    <p>{name}</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;