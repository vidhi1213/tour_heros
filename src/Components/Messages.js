import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllContact } from '../action/HeroesAction';
const Messages = () => {
    const [mesg, setMessage] = useState([]);
    const dispatch = useDispatch();
   // const heroData=useSelector((state)=>state.heroes.heroData);
    const messages = useSelector((state) => state.heroes.messages);
    useEffect(() => {
        setMessage(messages);
        //dispatch(featchMessage('feach data'))
    }, [dispatch, messages])
const deletedata=()=>{
    dispatch(clearAllContact());
}

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 msghero">
                        <h2>Messages</h2>
                        <button className="btn btn-light btn-outline-secondary" onClick={()=>deletedata()}>Clear messages</button>
                        {
                            mesg.map((msg, i) => {
                                return (
                                    <div key={i}>{msg.msg}
                                    {console.log(msg)}
                                    {i+1}
                                    </div>
                                  
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    )
}
export default Messages;