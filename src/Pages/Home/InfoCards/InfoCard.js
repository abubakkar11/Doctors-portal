import React from 'react';

const InfoCard = ({ card }) => {
    const {img , name ,body , bgClass }= card
    console.log(card)
    return (
        <div className={`card card-side flex items-center mt-12 text-white p-3 ${bgClass} shadow-xl`}>
            <div><figure><img src={img} className='w-16' alt="Movie" /></figure></div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default InfoCard;