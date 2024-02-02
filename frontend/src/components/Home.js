import React, {useState,useEffect, useContext} from "react";
import Greeting from "../Utils/Greeting";
import DisplayTodos from "../Utils/DisplayTodos";
import { RxPlus } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import DataContext from "../context/DataContext";

const Home = () => {
  const {
    data,
    setData,
    edit,
    setEdit,
    addNotificationTitle,
    editNotificationTitle,
    deleteNotificationTitle,
    setDeleteNotificationTitle,
    addNotification,
    editNotification,
    deleteNotification,
    setDeleteNotification,
    setTaskDetails,
  } = useContext(DataContext);
 
 
  const navigate = useNavigate();

  return (
    <div className=" w-full relative min-h-screen pb-60 bg-gradient-to-r from-violet-100 to-slate-50">
      <Greeting/>
      <div className=" max-w-[1300px] px-3 m-auto">
       <div>
         <DisplayTodos
           data={data}
           setData={setData}
           edit={edit}
           setEdit={setEdit}
           setDeleteNotificationTitle={setDeleteNotificationTitle}
           setDeleteNotification={setDeleteNotification}
           setTaskDetails={setTaskDetails}
         />
         {addNotification && (
           <div className="z-10 px-3 py-2 rounded-md bg-white border-l-[5px] flex items-center gap-2 border-green-600 fixed bottom-8 left-[50%] -translate-x-[50%]">
             <FaCheck className=" text-xl text-green-500" />
             <h2 className=" max-md:text-xs text-sm text-slate-600 font-semibold">
               Added task - {addNotificationTitle}
             </h2>
           </div>
         )}
           {editNotification && (
           <div className="z-10 px-3 py-2 rounded-md bg-white border-l-[5px] flex items-center gap-2 border-green-600 fixed bottom-8 left-[50%] -translate-x-[50%]">
             <FaCheck className=" text-xl text-green-500" />{" "}
             <h2 className=" max-md:text-xs text-sm text-slate-600 font-semibold">
               Task {editNotificationTitle} updated
             </h2>
           </div>
         )}
          {deleteNotification && (
           <div className="z-10 px-3 py-2 rounded-md bg-white border-l-[5px] flex items-center gap-2 border-green-600 fixed bottom-8 left-[50%] -translate-x-[50%]">
             <FaCheck className=" text-xl text-green-500" />
             <h2 className="max-md:text-xs text-sm text-slate-600 font-semibold">
               Deleted Task - {deleteNotificationTitle}
             </h2>
           </div>
         )}
         
         <div
           onClick={() => navigate("/addTodo")}
           className=" z-10 fixed bottom-10 w-16 h-16 shadow-xl max-sm:w-14 max-sm:h-14 cursor-pointer bg-grey-300 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-rose-400 hover:via-yellow-300 hover:to-yellow-300 hover:transform hover:scale-105 grid place-items-center rounded-full left-[50%] -translate-x-[50%]"
         >
           <RxPlus className=" text-4xl max-sm:text-3xl plusIcon" />
         </div>
       </div>
     </div>

     
    </div>
  );
};

export default Home;
