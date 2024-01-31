import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import TopNav from "../Utils/TopNav";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";


const EditTodo = () => {
 const {
   data,
   setData,
   edit,
   setEdit,
   setEditNotificationTitle,
   setEditNotification,
   index,
 } = useContext(DataContext);


 const [emptyInputError, setEmptyInputError] = useState(false);


 const [nameCountError, setNameCountError] = useState("");
 const [descriptionCountError, setDescriptionCountError] = useState("");


 const navigate = useNavigate("");


 const handleKeyDown = (e) => {
   if (e.key === "Enter") {
     e.preventDefault();
   }
 };


 const handleEditTitle = (e) => {
   let title = e.target.value;
   setEdit({
     id: edit.id,
     title: title,
     description: edit.description,
     check: edit.check,
     currentTime: edit.currentTime,
     deadline: edit.deadline,
   });


   if (title.length >= 35) {
     setNameCountError("Name should be less than or equal to 30 characters");
   } else {
     setNameCountError("");
   }
 };


 const handleEditDescription = (e) => {
   let description = e.target.value;
   setEdit({
     id: edit.id,
     title: edit.title,
     description: description,
     check: edit.check,
     currentTime: edit.currentTime,
     deadline: edit.deadline,
   });


   if (description.length >= 200) {
     setDescriptionCountError(
       "Description should be less than or equal to 200 characters"
     );
   } else {
     setDescriptionCountError("");
   }
 };


 const handleDeadlineEdit = (val) => {
   setEdit({
     id: edit.id,
     title: edit.title,
     description: edit.description,
     check: edit.check,
     currentTime: edit.currentTime,
     deadline: val,
   });
 }


 const handleEditSubmit = (e, index) => {
   e.preventDefault();


   if (edit.title === "") {
     setEmptyInputError(true);


     setTimeout(() => {
       setEmptyInputError(false);
     }, 4000);
   } else {
     const editIndex = [...data];
     editIndex[index] = edit;


     setData(editIndex);
     localStorage.setItem("todoItems", JSON.stringify(editIndex));
     setEdit("");
     navigate("/");


     setEditNotificationTitle(edit.title);
     setEditNotification(true);
     setTimeout(() => {
       setEditNotification(false);
       setEditNotificationTitle("");
     }, 4000);
   }
 };


 const handleCancel = () => {
   setEdit("");
   navigate("/");
 };




 return (
   <div className=" w-full relative min-h-screen bg-purple-600">
     <div className=" max-w-[1300px] px-10 max-md:px-5 m-auto">
       <div>
         <TopNav title={"Edit Todo"} />


         <div className="mt-10">
           <form className="max-w-[600px] m-auto">
             <div>
               <label
                 className={`text-sm max-sm:text-xs ${
                   nameCountError ? "text-red-500" : "text-purple-200"
                 } text-purple-200`}
                 htmlFor="taskName"
               >
                 Edit Name
               </label>
               <input
                 type="text"
                 id="taskName"
                 value={edit.title}
                 onChange={handleEditTitle}
                 onKeyDown={handleKeyDown}
                 placeholder="Enter task name"
                 className={`w-full h-14 max-sm:h-12 ${
                   nameCountError ? "border-red-500 border-2" : "border-none"
                 } rounded-xl p-4 text-base max-sm:placeholder:text-sm mt-1 outline-none`}
               />
               <p className="text-red-500 text-base max-sm:text-xs mt-1">
                 {nameCountError}
               </p>
             </div>
             <div className=" mt-7 max-sm:mt-4">
               <label
                 className={`text-sm max-sm:text-xs ${
                   descriptionCountError ? "text-red-500" : "text-purple-200"
                 } text-purple-200`}
                 htmlFor="taskDescription"
               >
                 Task Description
               </label>
               <textarea
                 id="taskDescription"
                 value={edit.description}
                 onChange={handleEditDescription}
                 placeholder="Enter task description"
                 className={`resize-none ${
                   descriptionCountError
                     ? "border-red-500 border-2"
                     : "border-none"
                 }  w-full rounded-xl p-4 max-sm:p-3 mt-1 text-base max-sm:placeholder:text-sm h-48 max-sm:h-36 outline-none`}
               ></textarea>
               <p className="text-red-500 text-base max-sm:text-xs mt-1">
                 {descriptionCountError}
               </p>
             </div>
             <div className="mt-4 max-sm:mt-4 ">
               <label
                 className={` text-sm max-sm:text-xs ${
                   descriptionCountError ? "text-red-500" : "text-purple-200"
                 } text-purple-200`}
                 htmlFor="taskDeadline"
               >
                 Task Deadline
               </label>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <DemoContainer components={["DateTimePicker"]}>
                   <DateTimePicker
                     id="taskDeadline"
                     value={edit.deadline}
                     onChange={(newValue) => handleDeadlineEdit(newValue)}
                     className="bg-white border-none w-full rounded-xl p-4 max-sm:p-3 text-base max-sm:placeholder:text-sm h-14 max-sm:h-12 outline-none"
                     defaultValue={dayjs(new Date())}
                   />
                 </DemoContainer>
               </LocalizationProvider>
             </div>


             <div className="text-center flex gap-4 max-sm:flex-col mt-4">
               <button
                 onClick={handleCancel}
                 className="bg-purple-400 hover:bg-purple-800 transition text-xl font-bold text-white p-4 max-sm:p-3 max-sm:text-lg rounded-xl w-full"
               >
                 Cancel
               </button>


               <button
                 disabled={
                   nameCountError || descriptionCountError || !edit.id
                     ? true
                     : false
                 }
                 type="submit"
                 onClick={(e) => handleEditSubmit(e, index)}
                 className={`${
                   nameCountError || descriptionCountError || !edit.id
                     ? "bg-purple-700 cursor-not-allowed text-purple-400"
                     : "hover:bg-purple-800 text-white"
                 } transition text-xl font-bold bg-purple-400  p-4 max-sm:p-3 max-sm:text-lg rounded-xl w-full`}
               >
                 Update
               </button>
             </div>
           </form>


           {emptyInputError && (
             <div className=" max-sm:w-[230px] px-3 py-2 rounded-md bg-white border-l-[10px] flex items-center gap-2 border-red-600 absolute bottom-8 left-[50%] -translate-x-[50%]">
               <IoIosCloseCircle className=" text-2xl max-sm:text-xl text-red-500" />{" "}
               <h2 className=" max-md:text-xs text-sm text-slate-600 font-semibold">
                 Please enter a task name
               </h2>
             </div>
           )}
         </div>
       </div>
     </div>
   </div>
 );
};


export default EditTodo;





