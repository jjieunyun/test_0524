import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time,  setTime ]= useState(new Date());

    const tick = () => {
        setTime(new Date())
    }

    useEffect(()=>{
        setInterval(()=>tick(),1000)
    })

    return (
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
};

export default Clock;