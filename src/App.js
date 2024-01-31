import React from "react";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
const App = () => {
  return (
 <DataProvider>
      <div>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/addTodo" element={<AddTodo />} />
       </Routes>
      </div>
        </DataProvider>
    
  );
};

export default App;
