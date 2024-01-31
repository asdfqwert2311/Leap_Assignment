import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const DisplayTodos = ({
  data,
  setData,
  setEdit
}) => {

  const[search,setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  
  useEffect(() => {
    const filterResults = data.filter(
      (val) =>
        val.title.toLowerCase().includes(search.toLowerCase()) ||
        val.description.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filterResults);
  }, [data, search]);

  return (
    <>
      {data.length ? (
        <div>
          <div className="max-md:container max-w-[700px] m-auto flex flex-col gap-4 max-sm:gap-3 pb-5">
            {searchResults.map((val, index) => (
              <Todo
                key={index}
                i={index}
                val={val}
                data={data}
                setData={setData}
                setEdit={setEdit}
               
      
              />
            ))}
          </div>
        </div>
      ) : (
        <h1 className=" w-full text-center text-2xl max-md:text-2xl max-sm:text-xl text-white font-bold absolute bottom-[50%] left-[50%] -translate-x-[50%]">
          You don't have any tasks
        </h1>
      )}
    </>
  );
};

export default DisplayTodos;
