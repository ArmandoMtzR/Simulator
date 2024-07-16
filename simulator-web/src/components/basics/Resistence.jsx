import React, { useEffect, useState } from "react";

// x0 o 0 -> Black
// x1 o 1 -> Brown
// x10 o 2 -> Red
// x100 o 3 -> Orange
// x1k o 4 -> Yellow
// x10k o 5 -> Green
// x100k o 6 -> Blue
// x1M o 7 -> Purple
// x10M o 8 -> Gray
// x100M o 9 -> White
const Resistence = ({initValue}) => {
    const [value, setValue] = useState(initValue);
    const [coeff, setCoeff] = useState(Math.pow(10, String(value).length - 3));
    return <>
        <span>{value} Ω</span>
        <div className="Resistence">
            <div className={`Band R${Math.round((value/(coeff*100)%10))}`}></div>
            <div className={`Band R${Math.round((value/(coeff*10)%10))}`}></div>
            <div className={`Band R${Math.round((value/coeff)%10)}`}></div>
            <div className={`Band R${coeff}`}></div>
        </div>
    </>
};

export default Resistence;