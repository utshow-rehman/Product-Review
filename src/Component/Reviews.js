import React from 'react';
import ReviewHooks from '../Hooks/ReviewHooks';
import HomeReview from './HomeReview';

const Reviews = () => {
    const [review,setReview]=ReviewHooks();
    return (
        <div className='mt-5'>
            <div className='row m-3'>
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