import React from 'react';
import "./Homereview.css"

const HomeReview = ({rev}) => {
    const {name,Comment,Rating}=rev;
    return (
        <div className='col-3 card ms-3 mb-2 p-3 rounded-3 background'>
             <h6>Name: {name}</h6>
             <h6>Rating: {Rating}</h6>
             <p>{Comment}</p>
        </div>
    );
};

export default HomeReview;