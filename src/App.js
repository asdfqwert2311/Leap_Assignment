import React from "react";
import Home from "./components/Home";
import AddTodo from "./components/AddTodo";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import EditTodo from "./components/EditTodo";
const App = () => {
  return (
 <DataProvider>
      <div>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/addTodo" element={<AddTodo />} />
         <Route path="/edit" element={<EditTodo />} />
       </Routes>
      </div>
        </DataProvider>
    
  );
};

export default App;
