import React, {useState} from "react";

function CategoryFilter({categories, onButton, onSetButtonState}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) =>(
        <button key={index} className={onButton===category? "selected": ""} 
        onClick={()=>{onSetButtonState(category)}}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
