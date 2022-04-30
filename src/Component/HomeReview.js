import React from 'react';

const HomeReview = ({rev}) => {
    const {name,Comment,Rating}=rev;
    return (
        <div className='col-3 card ms-3 mb-2'>
             <h4>Name: {name}</h4>
             <h5>Rating: {Rating}</h5>
             <p>{Comment}</p>
        </div>
    );
};

export default HomeReview;