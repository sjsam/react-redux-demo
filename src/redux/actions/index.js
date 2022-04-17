/*
 * Action Creators for Redux.
 * Each action creators returns an object of type
 *  {
 *      type:'ACTION_TYPE'
 *      payload:{SOME_OBJECT}
 *  }
 */

import { CREATE_POLICY,CREATE_CLAIM,CANCEL_POLICY } from "../../utils/constants"

export const createPolicy = (name,initialDeposit)=>{
    return {
        type:CREATE_POLICY,
        payload:{
            name:name,
            deposit:initialDeposit
        }
    }
}

export const cancelPolicy = (name)=>{
    return {
        type:CANCEL_POLICY,
        payload:{
            name:name,
        }
    }
}

export const createClaim = (name,amount)=>{
    return {
        type:CREATE_CLAIM,
        payload:{
            name:name,
            claimAmount:amount
        }
    }
}