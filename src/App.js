import {useEffect, useState} from "react";
import { API_URL } from "./secret";
import axios from "axios";
import Home from "./components/Home/Home";

function App() {

  let [data,setData] = useState(null);
  let [selected,setSelected] = useState("All");

  const changeselected = (selected)=>{
    setSelected(selected);
  }

  useEffect(()=>{
    async function fetchData(){
      let response = await axios.get(API_URL);
      let str = response.data;
      //There was extra "," at 1826 so it is removed
      str = str.slice(0,1826)+str.slice(1827);
      console.log(JSON.parse(str));
      let data = JSON.parse(str);
      let {teams} = data;
      if(selected==="Favourite"){
        teams = teams.filter((obj)=>obj.is_favorited==true);
      }else if(selected==="Archived"){
        teams = teams.filter((obj)=>obj.is_archived==true);
      }
      setData({...data,teams});
      
    }
    fetchData();
  },[selected]);


  return (
    <div className="App">
      {data?<Home data={data} changeHover={changeselected} selected={selected}/>:""}
    </div>
  );
}

export default App;
