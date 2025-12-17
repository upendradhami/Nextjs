import React from "react";

export default
function Layoutall(
  {children} : {children: React.ReactNode}
 ) {
  return (
    <div> 

        <h1 className="text-center font-bold text-2xl text-blue-500"> 
           before welcoming to the layout new page , 
            Welcome to Dashboard Page </h1>   

        {children}

        <h2 className="text-center font-bold text-2xl text-red-500"> 
           after welcoming to the layout new page , 
            Welcome to Dashboard Page </h2> 
    </div>
  );
}