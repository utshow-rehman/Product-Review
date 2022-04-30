import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewHooks from '../Hooks/ReviewHooks';
import HomeReview from './HomeReview';
const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/review");
    }
    const [review,setReview]=ReviewHooks();
    
    let arr=review;
    if(arr.length>0){
         arr=arr.slice(0 ,3);
    }
    return (
        <div className='mb-5'>
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

            {/* Homepage Review Part     */}
          
           <h1>Customer Review</h1>
           
               <div className='row m-3'>
               {
                   
                    arr.map(rev => <HomeReview
                        key={rev.id}
                        rev={rev}
                     
                    ></HomeReview>)
                }
        
               </div>
                {/* go review route  */}
               <button className='btn btn-primary' onClick={handleClick}>See All Reviews</button>
              
           </div>
        </div>
    );
};

export default Home;