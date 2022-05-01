import React from 'react';
import ReviewHooks from '../Hooks/ReviewHooks';
import HomeReview from './HomeReview';

const Reviews = () => {
    const [review,setReview]=ReviewHooks();
    return (
        <div className='mt-5'>
            <h1 className='text-center text-primary'>Reviews</h1>
            <div className='row m-3 mt-5'>
               {
                   
                    review.map(rev => <HomeReview
                        key={rev.id}
                        rev={rev}
                     
                    ></HomeReview>)
                }
                </div>
        </div>
    );
};

export default Reviews;