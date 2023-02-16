
import {FilterValuesType} from "../App";


export const FilterReducer = (state:FilterValuesType,action:TsarType)=> {
    switch (action.type) {

        case "FILTER":{
            return state=action.payload.value
        }
        default :return state
    }
}

type TsarType =filterACType


type filterACType =ReturnType<typeof filterAC>
export  const  filterAC =(value: FilterValuesType)=> {
    return {
        type:'FILTER',
        payload : {
            value
        }
    } as const
}