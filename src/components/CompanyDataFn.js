import React from "react";
import { useSelector,useDispatch } from "react-redux";

export const CompDataFn = (props)=>{
    console.log('Inside CompDataFn');
    console.log(props);
    let dispatch=useDispatch;
    let bagOfMoney = useSelector((state)=>state.bagOfMoney);

    return (
        <div className="text-xl">
            Bag of money : {bagOfMoney}
        </div>
    );

}


