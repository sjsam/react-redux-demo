import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const AutoNavigate = () => {
    //console.clear();
    console.log('Inside AutoNavigate');
    const bagOfMoney = useSelector((s) => s.bagOfMoney);
    let navigateTo = useNavigate();
    useEffect(() => {
        console.log('Dangerous Call');
        console.log(`Bag of money : ${bagOfMoney}`);
        if (bagOfMoney >= 3000000) {
            navigateTo("/fraud", { replace: true })
            //return <Navigate  replace />;
        }
    },[bagOfMoney,navigateTo]);
    return <></>
}