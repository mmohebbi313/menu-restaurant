import React from "react";
import { useState , useId } from "react";

const Categories = ({exportcat , funFilter}) => {
  const [inja , setInja] = useState('all')

  return (
    <div className="btn-container">
      {exportcat.map( (rr , index) =>(
        <button key={index}
        onClick={()=> {
          setInja(rr) 
          funFilter(rr)
        }
        }
        type="button"
        // highlight class  for highlight main category
        className={rr == inja ? "filter-btn highlight" : "filter-btn"}
      >
        {rr}
      </button>
      ))}
      
      
    </div>
  );
};

export default Categories;
