import React from "react";
import { useParams } from "react-router-dom";
import TopNav from "../Utils/TopNav";
import PageNotFound from "./PageNotFound";


const TaskDetails = () => {
 const { id } = useParams();
 const items = JSON.parse(localStorage.getItem("todoItems"));


 const details = items.find((val) => val.id.toString() === id);


 if(!details){
   return <PageNotFound />
 }
 const date = new Date(details.deadline);


 const day = date.getDate();
 const month = date.getMonth() + 1;
 const year = date.getFullYear();


 const time = date.toLocaleTimeString();
 const hours =  parseInt(time.split(":")[0]);
 const minutes = time.split(":")[1];


  return (
   <div className=" w-full relative min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-xl">
     <div className=" max-w-[1300px] px-10 max-md:px-5 m-auto">
       <div>
         <TopNav title={"Task Details"} />


         <div className=" rounded-2xl bg-white max-w-[600px] m-auto mt-16 py-10 px-8 max-sm:p-5 text-black">
           <h1 className=" text-center text-4xl max-sm:text-2xl font-bold">
             Task
           </h1>


           <div className=" mt-8">
             <div className="max-sm:text-base font-semibold flex gap-4 items-center border-b pt-4 pb-3">
               <h2 className="text-left text-lg max-sm:text-sm min-w-28">
                 Task Name:
               </h2>
               <p className=" text-left text-base max-sm:text-sm font-normal">
                 {details.title}
               </p>
             </div>


             <div className="max-sm:text-base font-semibold flex gap-4 items-center border-b pt-4 pb-3">
               <h2 className="text-left text-lg max-sm:text-sm min-w-28">
                 Description:
               </h2>
               <p className="text-left text-base max-sm:text-sm font-normal">
                 {details.description ? details.description : "-"}
               </p>
             </div>
             <div className="text-xl max-sm:text-base font-semibold flex gap-4 items-center border-b pt-4 pb-3">
               <h2 className=" text-left text-lg max-sm:text-sm min-w-28">
                 Task Deadline:
               </h2>
               <p className="text-left -ml-5 text-base max-sm:text-sm font-normal">
                 {`${day}/${month}/${year} , ${hours}:${minutes} ${
                   hours >= 12 ? "PM" : "AM"
                 }`}
               </p>
             </div>
             <div className="text-xl max-sm:text-base font-semibold flex gap-4 items-center border-b pt-4 pb-3">
               <h2 className=" text-left text-lg max-sm:text-sm min-w-28">
                 Created:
               </h2>
               <p className="text-left -ml-6 text-base max-sm:text-sm font-normal">
                 {details.currentTime}
               </p>
             </div>


             <div className="max-sm:text-base font-semibold flex gap-4 items-center border-b pt-4 pb-3">
               <h2 className="text-left  text-lg max-sm:text-sm min-w-28">
                 Complete:
               </h2>
               <p className=" text-left -ml-5  text-base max-sm:text-sm font-normal">
                 {details.check ? "Completed" : "Not completed"}
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};


export default TaskDetails;





