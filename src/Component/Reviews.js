import React from 'react';
import ReviewHooks from '../Hooks/ReviewHooks';
import HomeReview from './HomeReview';

const Reviews = () => {
    const [review,setReview]=ReviewHooks();
    return (
        <div>
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