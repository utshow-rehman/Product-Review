import React from 'react';
import ReviewHooks from '../Hooks/ReviewHooks';
const Home = () => {
    const [review,setReview]=ReviewHooks();
    return (
        <div>
            <div className='d-flex mt-5'>
           <div className='w-50 '>
               <div>
                <h1>Your Best Laptop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Modi nostrum illo doloribus eveniet nihil. Doloremque molestiae asperiores, ut cumque totam tenetur quis deleniti porro vero.</p>
                 </div>
           </div>
           <div className='w-50'>
                  <img className='img-fluid' src="https://i.ibb.co/7CGkVdv/im2.jpg" alt="" />
           </div>
           </div>

           <div className='mt-5'>
           <h1>Customer Review {review.length}</h1>
           </div>
        </div>
    );
};

export default Home;