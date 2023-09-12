import React, {useState} from "react";
import './App.css';
import data from "./TemplateData.json";
import { BsSearch } from 'react-icons/bs';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
          &nbsp;
          <label ><b><BsSearch/></b></label> 
        </div>
        <div className="template_Container">
          {data.filter((value)=>{
                if(searchTerm === "")
                {
                  return value;
                }else if(value.title.toLowerCase().includes(searchTerm.toLowerCase()))
                {
                  return value;
                }else
                {
                  return false;
                }
              })
              .map((value) => {
                return(
                  <div className="template" 
                  key={value.id}>
                      <img src={value.image} alt="" className="marginFrom top"/>
                      <h3>{value.title}</h3>
                      <p className="price">${value.price}</p>
                      <h3>{value.Discription}</h3>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default App;