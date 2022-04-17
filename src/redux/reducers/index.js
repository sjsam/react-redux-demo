/*
 * Reducers
 * Analogous to Departments in our Insurance Company
 * Have the below syntax
 * const reducerName = (dataToOperateOn,action)=>{
 *   // if action is relevant create a new object of the same type as dataToOperateOn with suitable modifications
 *   // and return it
 *   // If no change return the 'dataToOperateOn' exactly as it is.
 *   }
 */

import {combineReducers} from 'redux'
import { CREATE_POLICY,CREATE_CLAIM,CANCEL_POLICY } from "../../utils/constants"

// Policy Dept.
const policyDept = (existingPolicies=[],action)=>{
    if(action.type === CREATE_POLICY){
        // Validation skipped for simplicity.
        return [...existingPolicies,action.payload.name];
    }
    if(action.type === CANCEL_POLICY){
        // Validation skipped for simplicity.
        return existingPolicies.filter((name)=>name!==action.payload.name);
    }
    return existingPolicies;
}

// Claims History Dept.
const claimsHistoryDept = (existingClaims=[],action)=>{
    if(action.type === CREATE_CLAIM){
        // Validation skipped for simplicity.
        return [...existingClaims,action.payload];
    }
    return existingClaims;
}

// Accounting Dept.
const accountingDept = (bagOfMoney=2000000,action)=>{
    if(action.type === CREATE_CLAIM){
        // Validation skipped for simplicity.
        return bagOfMoney - action.payload.claimAmount;
    }
    if(action.type === CREATE_POLICY){
        return bagOfMoney + action.payload.deposit;
    }
    return bagOfMoney;
}


export default combineReducers({
    policies:policyDept,
    claimsHistory:claimsHistoryDept,
    bagOfMoney:accountingDept
});

