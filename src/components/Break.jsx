import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBreak, minusBreak, selectBreak } from '../toolkit/timeSlice';

const Break = () => {
    const breakTime = useSelector(selectBreak);
    const dispatch = useDispatch();

    return (
        <div id="break-label">
            <h1>Break Length</h1>
            <div className="break-time">
            <button id="break-decrement" onClick={()=> dispatch(minusBreak())} > - </button>
            <h1 id="break-length">{breakTime}</h1>
            <button id="break-increment" onClick={()=> dispatch(addBreak())} > + </button>
            </div>            
        </div>
    )
}



export default Break
