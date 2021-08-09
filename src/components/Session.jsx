import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSession, minusSession, selectSession } from '../toolkit/timeSlice';

const Session = () => {
    const sessionTime = useSelector(selectSession);
    const dispatch = useDispatch();

    return (
        <div id="session-label">
            <h1>Session Length</h1>
            <div className="session-time">
            <button id="session-decrement" onClick={()=> dispatch(minusSession())} > - </button>
            <h1 id="session-length">{sessionTime}</h1>
            <button id="session-increment" onClick={()=> dispatch(addSession())} > + </button>
            </div>            
        </div>
    )
}



export default Session
