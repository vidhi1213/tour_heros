import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {updateHero} from '../action/HeroesAction';
const HeroDetails = (props) => {
    const [detail, setDetails] = useState('');
     const history=useHistory()
     const dispatch=useDispatch()
   //const [filterHero, setFilterHero] = useState([]);
    //const[adc,cds]=useState([]);
    const { id } = props.match.params;
    const heroData = useSelector((state) => state.heroes.heroData);
    const saveData=()=>{
        dispatch(updateHero(detail,id))
        history.goBack()
    }
    useEffect(() => {
       
        const filterdata = heroData.filter((_) => _._id == id);
        setDetails(filterdata[0].name)
       
      // setFilterHero()
    }, [id,heroData])
   
    return (
        
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h2 className="text-center mt-3">{detail} Details</h2></div>
                    <div className="id mt-3 text-center"><span>id:</span>{id}</div>
                    <div className="col-md-12">
                    <input type="text"
                    className="mb-3"
                        placeholder="Hero name"
                        value={detail}
                        onChange={(e) => { setDetails(e.target.value) }} />
                         <div className="col-md-12">
                             <div className="save">
                          <button className="  btn btn-light btn-outline-secondary mr-3" onClick={()=>history.goBack()} >Go Back</button>
                     <button className="btn btn-light btn-outline-secondary" onClick={saveData}  >save</button>
                     </div>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default HeroDetails;