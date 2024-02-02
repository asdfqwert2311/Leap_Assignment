import React, { useContext } from "react";
import { BiTask } from "react-icons/bi";
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";


const TasksOptions = ({
 data,
 setData,
 val,
 setEdit,
 setOpenOptions,
 setDeleteNotificationTitle,
 setDeleteNotification,
 index,
}) => {

 const {setIndex} = useContext(DataContext)

 const handleCheck = (id) => {

   const doneData = data.map((val) =>
     val.id === id ? { ...val, check: !val.check } : val
   );

   console.log("doneData",doneData)
   let arr = data.filter(val => val.id === id);
   let obj = arr[0];
   let {check} = obj;
   check = !check;
   let modifiedOjb = {...obj,check}

    console.log("modified",modifiedOjb);

   fetch(`http://localhost:8080/api/todos/${id}`,{
    method:"PUT",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify(modifiedOjb),
   }).then((res) => {
      return  res.json();
   }).then((newData) => {
    setData(doneData);
    setOpenOptions(false)
    localStorage.setItem("todoItems", JSON.stringify(doneData));
   })
   .catch(err => console.log(err));

  
 };
 
 const handleDelete = (isData) => {

  fetch(`http://localhost:8080/api/todos/${isData.id}`,{
    method:"DELETE",
   }).then(() => {
    const deleteData = data.filter((val) => val.id !== isData.id);
    setData(deleteData);
    localStorage.setItem("todoItems", JSON.stringify(deleteData));
  
  
    setDeleteNotificationTitle(isData.title);
  
  
    setDeleteNotification(true);
    setOpenOptions(false)
    setTimeout(() => {
      setDeleteNotification(false);
      setDeleteNotificationTitle("");
    }, 4000);
   })
   .catch(err => console.log(err));
};



 return (
   <div className="absolute z-10 w-[215px] shadow bg-white top-8 left-0 max-xl:-left-48 p-3 rounded-2xl">
     <ul className=" flex flex-col text-black">
       <li
         onClick={() => handleCheck(val.id)}
         className="max-sm:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-3 max-sm:py-2 px-2 rounded-md"
       >
         <FaCheck className=" text-2xl max-sm:text-xl text-slate-700" />
         {val.check ? "Mark as not done" : "Mark as done"}
       </li>
       <li
         onClick={() => {
           setIndex(index)
           setEdit({
             id: val.id,
             title: val.title,
             description: val.description,
             check: val.check,
             currentTime: val.currentTime,
             deadline: val.deadline,
           });
         }}
       >
         <Link
           to={"/edit"}
           className=" max-sm:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-3  px-2 rounded-md"
         >
           <RiEdit2Fill className=" text-2xl max-sm:text-xl text-slate-700" />
           Edit
         </Link>
       </li>
       <li
         
         onClick={() => handleDelete(val)} className="max-sm:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
       >
         <MdDelete className=" text-2xl max-sm:text-xl text-slate-700" />
         Delete
       </li>
       <li>
         <Link
           to={`/todo/${val.id}`}
           className=" max-sm:text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
         >
           <BiTask className=" text-2xl max-sm:text-xl text-slate-700" />
           Task details
         </Link>
       </li>
     </ul>
   </div>
 );
};


export default TasksOptions;





