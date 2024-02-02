import React, { useEffect, useRef, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import TasksOptions from "./TasksOptions";
import { FaCheck } from "react-icons/fa6";


const Todo = ({
 i,
 val,
 data,
 setData,
 setEdit,
 setDeleteNotificationTitle,
 setDeleteNotification,
 setTaskDetails,
 
}) => {
  const [openOptions, setOpenOptions] = useState(false);


 const menuRef = useRef();


 useEffect(() => {
   let handler = (e) => {
     if (!menuRef.current.contains(e.target)) {
       setOpenOptions(false);
     }
   };


   document.addEventListener("mousedown", handler);


   return () => {
     document.removeEventListener("mousedown", handler);
   };
 });


 return (
   <div className="flex shadow-2xl justify-between gap-4 max-w-full items-center rounded-2xl bg-white text-black px-6 py-5 max-sm:py-4 max-sm:px-4 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500 hover:text-white hover:scale-105">
     {val.check && (
       <div className=" bg-purple-500 p-4 max-sm:p-2 rounded-xl">
         <FaCheck className=" text-4xl" />
       </div>
     )}


     <div className="black w-full hover:bg-transparent ">
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
           } min-w-[110px] max-sm:text-xs font-bold`}
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
     <div ref={menuRef} className=" relative">
       <SlOptionsVertical
         onClick={() => setOpenOptions(!openOptions)}
         className=" text-lg cursor-pointer"
       />


       <div
         className={`${openOptions ? "animationActive" : "animationUnactive"}`}
       >
         {openOptions && (
           <TasksOptions
             index={i}
             val={val}
             data={data}
             setData={setData}
             setEdit={setEdit}
             setOpenOptions={setOpenOptions}
             setDeleteNotificationTitle={setDeleteNotificationTitle}
             setDeleteNotification={setDeleteNotification}
             setTaskDetails={setTaskDetails}

             
           />
         )}
       </div>
       </div>

   
   </div>
 );
};


export default Todo;




