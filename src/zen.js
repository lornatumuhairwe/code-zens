import React from 'react';

const Zen = prop => {
   return (
       <div>
           <blockquote className="center-text">
               &ldquo;{prop.zen}&rdquo;
           </blockquote>
       </div>
   )
};

export default Zen;
