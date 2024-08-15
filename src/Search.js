import React from "react";
import MoviesContainer from "./MoviesContainer";
function Search({setSearch}){
   
   function handleChange(e){
        setSearch(e.target.value)
    }

    return(
    <div className="search-container">
          <div className="ui fluid icon input">
         <input type="text" placeholder="Search a movie by name...." onChange={handleChange}/>
         <i className="search icon"></i>
    </div>
   
    </div>
    
    )
}
export default Search;