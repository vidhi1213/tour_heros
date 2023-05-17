import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {creatHeros,deleteHero,featchMessage} from '../action/HeroesAction';
const Heroes=()=>{
    const[inputList,setInputList]=useState("");
    const[Items,setItems]=useState([]);
    const dispatch = useDispatch();
    const heroData=useSelector((state)=>state.heroes.heroData);
   // const messages = useSelector((state) => state.heroes.messages);
   
    const itemEvent=(event)=>{
        setInputList(event.target.value);
    };
  
    const listOfItems=()=>{
        dispatch(creatHeros(inputList))
        if(inputList ==""){
            return null
        }
        else{
            dispatch(featchMessage('fetched heroes id='))
        }
       
        setInputList("");
    };

    useEffect(()=>{

        setItems(heroData);
    },[heroData])
     

    return(
      <>
    <div className="container pt-4">
    <h4>My Heroes</h4>
    <input type='text' placeholder="add to heroes" className="mb-3" value={inputList} onChange={itemEvent}></input>
       <button className="btn  btn-secondary" onClick={listOfItems}>Add Heroes</button>
      <ul className="heroes">
       {Items.map((item,i)=>{
        console.log("tree",item);
           return(
           <li key={i+1}>
               <Link to={`detail/${item._id}`}>
               <span className="badge">{i+1}</span> {item.name}
                   </Link>
                   <div>
                   <button className="delete" onClick={() => dispatch(deleteHero(item._id))}>X</button></div>
               </li>
              );
               
       })}
       </ul>
     
    </div>
    </>
    )
}
export default Heroes;