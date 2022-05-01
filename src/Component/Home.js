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
            <div className='d-flex mt-5 ms-5'>
           <div className='w-50 ms-5'>
               <div>
                <h1 className='text-primary'>Your Best Laptop</h1>
                <p>Dell Inspiron 15 3510 comes with Intel Celeron Dual Core N4020 (4MB Cache, 1.10 GHz Up To 2.80 GHz) Processor and Intel UHD Graphics 600. This Dell Inspiron 15 3510 featured 4GB DDR4 2400MHz, 1TB 5400RPM SATA HDD, that will provide you with responsive and stable performance.</p>
                 </div>
           </div>
           <div className='w-50'>
                  <img className='img-fluid' src="https://i.ibb.co/7CGkVdv/im2.jpg" alt="" />
           </div>
           </div>

           <div className='mt-5 ms-5'>

            {/* Homepage Review Part     */}
          
           <h1 className='text-center text-primary'>Customer Review</h1>
              <div className='ms-5'>
               <div className='row m-3'>
               {
                   
                    arr.map(rev => <HomeReview
                        key={rev.id}
                        rev={rev}
                     
                    ></HomeReview>)
                }
                </div>
        
               </div>
                {/* go review route  */}
                <div className='d-flex justify-content-center'>
               <button className='btn btn-primary ' onClick={handleClick}>See All Reviews</button>
               </div>
              
           </div>
        </div>
    );
};

export default Home;