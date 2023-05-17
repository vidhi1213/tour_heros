import React ,{ useEffect, useState }from "react";
import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
const HeroSearch=()=>{
    const[Items,setItems]=useState([]);
    const[search,setSearch]=useState([]);
    const heroData=useSelector((state)=>state.heroes.heroData);
    const[searchTerm,setSearchTerm]=useState('')
    useEffect(()=>{
        setItems(heroData);
        setSearch(Items.filter((item)=>{
            if(setSearchTerm === ''){
               return item
             }
             else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return item
             }
        }))
    },[Items,heroData,searchTerm])
    return(
    <>
    <div className="container">
    <div className="row">
      <label for="search-box">Hero Search</label>
      <input type="text" placeholder="search.." onChange={(e)=>{ setSearchTerm(e.target.value)}} />  
      <ul className="search-result">
       {searchTerm && search.map((item,i)=>{
        
           return(
           <li key={i+1}>
               <Link to={`detail/${item._id}`}>
               <span className="badge">{i+1}</span> {item.name}
                   </Link>
                   
               </li>
              );
               
       })}
       </ul>
       </div>
       </div>
    </>
    )
}
export default HeroSearch;

