import React from 'react';

const ServiceCard = ({ card }) => {
    const {img , name , body} = card
    return (
        <div className="card mt-12 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-24 h-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default ServiceCard;