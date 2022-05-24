
import React, {useMemo, useRef, useState} from 'react';

const List = () => {

    const inputRef = useRef(React.createRef());
    const [numList, setNumList] = useState([])
    const [avrResult, setAvgResult] = useState()

    const addNum = () => {
        const currentNumList = numList.map((num) =>num)
        const value = inputRef.current.value
        setNumList([...currentNumList, parseInt(value)])
        console.log(inputRef.current.value)
        // console.log(numList)
        inputRef.current.value = ''
    }
    useMemo(() => {
        let sum =0;
        for(let i=0; i<numList.length; i++) {
            sum = sum + numList[i];
        }
        return setAvgResult(numList.length===0? 0: (sum/numList.length).toFixed(2))

    },[numList])



    return (
        <div>
            
            <input 
                type="number"
                ref={inputRef}
            />
            <button
                onClick={addNum}
            >Add</button>
            
            

            <h3>모든 수의 평균 : {avrResult}</h3>
            <p>⭐소수점 둘째 자리까지 표시⭐</p>
            <ul>
                {numList.map((number,index) => {
                    return <li key={index}>{number}</li>
                })}
            </ul>
        </div>
    );
};

export default List;