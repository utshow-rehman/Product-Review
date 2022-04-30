import React from 'react';

const HomeReview = ({rev}) => {
    const {name,Comment,Rating}=rev;
    return (
        <div className='col card ms-3'>
             <h3>Name: {name}</h3>
             <h5>Rating: {Rating}</h5>
             <p>{Comment}</p>
        </div>
    );
};

export default HomeReview;