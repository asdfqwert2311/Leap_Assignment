import React, { useContext} from "react";
import Greeting from "../Utils/Greeting";


const Home = () => {

  return (
    <div className=" w-full relative min-h-screen pb-60 bg-gradient-to-r from-purple-700 to-purple-500">
      <Greeting/>
     
    </div>
  );
};

export default Home;
