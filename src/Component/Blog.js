import React from 'react';

const Blog = () => {
     let block="<p/> <div/>"
     let inline="<span/> <img/>"
    return (
        <div className='mt-5'>
            <h1 className='text-center text-primary'>Blog</h1>
          <div className='ms-5'>
            <h3>Context Api</h3>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. </p>
            <h3>Block-level Elements</h3>
            <p>Block level elements always start with a new line. it always takes full width of the line.
               Block level elements are {block}.
            </p>
            <h3>Inline Elements</h3>
            <p>Inline elements doesn't start with new line.it takes as much width as necessary
                Inline elements are {inline}.
            </p>

        </div>  
        </div>
    );
};

export default Blog;