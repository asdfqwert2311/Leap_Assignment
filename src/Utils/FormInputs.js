import React, {useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";


import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";


const FormInputs = ({
 data,
 setData,
 setAddNotification,
 setAddNotificationTitle,
}) => {
  const [taskName, setTaskName] = useState("");
 const [taskDescription, setTaskDescription] = useState("");


 const [emptyInputError, setEmptyInputError] = useState(false);
 const [nameCountError, setNameCountError] = useState("");
 const [descriptionCountError, setDescriptionCountError] = useState("");
 const [deadline, setDeadline] = useState(dayjs(new Date()));




 const navigate = useNavigate();


 const handleKeyDown = (e) => {
   if (e.key === "Enter") {
     e.preventDefault();
   }
 };
 const handleName = (e) => {
   let title = e.target.value;
   setTaskName(e.target.value);


   if (title.length > 35) {
     setNameCountError("Name should be less than or equal to 30 characters");
   } else {
     setNameCountError("");
   }
 };
 const handleDescription = (e) => {
   let description = e.target.value;
   setTaskDescription(e.target.value);


   if (description.length > 250) {
     setDescriptionCountError(
       "Description should be less than or equal to 200 characters"
     );
   } else {
     setDescriptionCountError("");
   }
 };


 const handleSubmit = (e) => {
   e.preventDefault();


   // Create a new Date object
   const now = new Date();


   const date = now.getDate();


   const month = now.getMonth() + 1;


   const year = now.getFullYear();


   // Get the hours (in 24-hour format)
   let hours = now.getHours();


   // Determine whether it's AM or PM
   const amOrPm = hours >= 12 ? "PM" : "AM";


   // Convert hours to 12-hour format
   hours = (hours % 12 || 12).toString().padStart(2, "0");


   // Get the minutes
   const minutes = now.getMinutes().toString().padStart(2, "0");


   const id = uuidv4();
   const title = taskName;
   const description = taskDescription;
   const currentTime = `${date}/${month}/${year} ,${hours}:${minutes} ${amOrPm}`;
   const check = false;


   if (taskName === "") {
   setEmptyInputError(true);


   setTimeout(() => {
       setEmptyInputError(false);
   }, 4000);
   } else {
       const newTask = {
           id: id,
           title: title,
           description: description,
           currentTime: currentTime,
           deadline:deadline,
           check: check,
       };


       localStorage.setItem("todoItems", JSON.stringify([...data, newTask]));
       setData([...data, newTask]);
       setTaskName("");
       setTaskDescription("");
       setEmptyInputError(false);
       navigate("/");


       setAddNotificationTitle(taskName);
       setAddNotification(true);
       setTimeout(() => {
           setAddNotification(false);
           setAddNotificationTitle("");
       }, 4000);
   }
};
  
 return (
       <div className=" py-10">
           <form onSubmit={handleSubmit} className="max-w-[600px] m-auto">
               <div>
                   <label
                       className={`text-sm max-sm:text-xs ${
                           nameCountError ? "text-red-500" : "text-purple-200"
                       } text-purple-200`}
                       htmlFor="taskName"
                   >
                       Task Name
                   </label>
                   <input
                       type="text"
                       id="taskName"
                       placeholder="Enter task name"
                       value={taskName}
                       onChange={handleName}
                       onKeyDown={handleKeyDown}
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
                       placeholder="Enter task description"
                       value={taskDescription}
                       onChange={handleDescription}
                       className={`resize-none ${
                           descriptionCountError ? "border-red-500 border-2" : "border-none"
                       }  w-full rounded-xl p-4 max-sm:p-3 mt-1 text-base max-sm:placeholder:text-sm h-48 max-sm:h-36 outline-none`}
                   ></textarea>
                   <p className="text-red-500 text-base max-sm:text-xs">
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
                               value={deadline}
                               onChange={(newValue) => setDeadline(newValue)}
                               className="bg-white border-none w-full rounded-xl p-4 max-sm:p-3 text-base max-sm:placeholder:text-sm h-14 max-sm:h-12 outline-none"
                               defaultValue={dayjs(new Date())}
                           />
                       </DemoContainer>
                   </LocalizationProvider>
               </div>
               <div className="text-center mt-7">
                   <button
                       disabled={nameCountError || descriptionCountError ? true : false}
                       type="submit"
                       className={`${
                           nameCountError || descriptionCountError
                               ? "bg-purple-700 cursor-not-allowed text-purple-400"
                               : "hover:bg-purple-800 text-white "
                       } transition text-xl font-bold bg-purple-400 p-4 max-sm:p-3 max-sm:text-lg rounded-xl w-full`}
                   >
                       Create Task
                   </button>
               </div>
           </form>


           {emptyInputError && (
               <div className=" max-sm:w-[230px] px-3 py-2 rounded-md bg-white border-l-[5px] flex items-center gap-2 border-red-600 fixed bottom-8 left-[50%] -translate-x-[50%]">
                   <IoIosCloseCircle className=" text-2xl max-sm:text-xl text-red-500" />{" "}
                   <h2 className=" max-md:text-xs text-sm text-slate-600 font-semibold">
                       Please enter a task name
                   </h2>
               </div>
           )}
       </div>
   );
};
export default FormInputs;





