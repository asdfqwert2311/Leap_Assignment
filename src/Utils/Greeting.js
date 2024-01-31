import { FaRegUser } from "react-icons/fa";
const Greeting = () => {
  const date = new Date();
  const hours = date.getHours();
  
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
 
 
  let month = months[date.getMonth()]
  //  let today = `${date.getUTCDate()} ${month} ${date.getFullYear()}`
  let today='31'
  let greeting = "";
 
 
  if (hours >= 4 && hours < 12) {
    greeting = "Good morning";
  }
  else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  }
  else {
    greeting = "Good evening";
  }
 
 
  return (
    <div style={{backgroundSize:"cover" }} className={`w-screen py-7 px-10 max-sm:px-2 max-sm:py-3 ${( hours>=4 && hours<12) ? 'Morning' :
    (hours>=12 && hours<18) ? 'Afternoon': 'Evening'}`}>
      <div className="flex justify-between items-center">
        <div className="w-full">
        <div className="text-white  font-bold flex-column items-center justify-around text-3xl max-sm:text-lg"> <p className="flex justify-around">{greeting}</p><p className=" font-Great Vibes flex justify-around text-centre text-sm">"Efficiency is the compass guiding daily progress,<br></br> turning each moment into a step towards success."</p> </div>
        </div>
 
 
        <div className="LOgo">
        <FaRegUser />
        </div>
      </div>
    </div>
  );
 };
 
 
 export default Greeting;
 