import React, { useEffect, useRef, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import TasksOptions from "./TasksOptions";
import { FaCheck } from "react-icons/fa6";


const Todo = ({
 i,
 val,
 data,
 setData
 
}) => {

 return (
   <div className="flex justify-between gap-4 max-w-full items-center text-white bg-purple-800 rounded-2xl px-6 py-5 max-sm:py-4 max-sm:px-4">
     {val.check && (
       <div className=" bg-purple-500 p-4 max-sm:p-2 rounded-xl">
         <FaCheck className=" text-4xl" />
       </div>
     )}


     <div className="black w-full">
       <div
         className={`flex justify-between gap-10 items-center ${
           val.description ? "mb-3 max-sm:mb-1" : "mb-0"
         }`}
       >
         <h2
           className={`${
             val.check ? "line-through" : null
           } font-bold text-lg displayInput max-sm:text-sm`}
         >
           {val.title}
         </h2>
         <p
           className={`${
             val.check ? "line-through" : null
           } min-w-[110px] max-sm:text-xs font-light text-gray-200`}
         >
           {val.currentTime}
         </p>
       </div>
       <p
         className={`${
           val.check ? "line-through" : null
         } text-base max-sm:text-sm ${!val.description && "hidden"}`}
       >
         {val.description}
       </p>
       <p className="text-base  italic text-xs mt-4">
         Deadline: &nbsp;
         {new Date(val.deadline).toLocaleDateString()} {" • "}
         {new Date(val.deadline).toLocaleTimeString()}
       </p>
     </div>


   
   </div>
 );
};


export default Todo;




