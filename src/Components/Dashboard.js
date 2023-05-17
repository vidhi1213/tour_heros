import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSearch from './HeroSearch';
import { useSelector,useDispatch} from "react-redux";
//import {featchMessage} from '../action/HeroesAction';

const Dashboard=()=>{
    const[data,setData]=useState([]);
   const dispatch = useDispatch();
    const heroData=useSelector((state)=>state.heroes.heroData);
    useEffect(()=>{
        let shuffled = heroData 
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        setData(shuffled);
      //  dispatch(featchMessage('fetched heroes'))
    
    },[heroData,dispatch])

 return(
     <>
       
      <h2 className="text-center">Top Heroes</h2>
      <div className="heroes-menu">
     {data.map((data,i)=>{
       if(i>3) return null;
     return(
   
    <li key={i+1}>
        <Link to={`detail/${data._id}`}>
        <span className="badge"></span> {data.name}
            </Link>
          </li>
         
       );
     })}
 </div>
<HeroSearch/>
</>
 )

}
export default Dashboard;