import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const reviewsData = [
        {
            _id : 1,
            name : 'Winson Herry',
            body : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            location : 'California'
        },
        {
            _id : 2,
            name : 'Winson Herry',
            body : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            location : 'California'
        },
        {
            _id : 3,
            name : 'Winson Herry',
            body : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            location : 'California'
        },
    ]
    return (
        <div className='mt-12'>
            <div>
                <h3 className='text-primary font-semibold text-2xl'>Testimonial</h3>
                <h1 className='text-3xl'>What Our Patients Says</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviewsData.map(review => <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;