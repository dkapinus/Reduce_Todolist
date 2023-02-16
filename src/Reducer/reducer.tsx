import {TaskType} from "../../Finish/Todolist";
import {v1} from "uuid";


export const reducer = (state:TaskType[],action:TsarType)=> {
    switch (action.type) {
        case "REMOVE-TASK":{
           return state.filter((el)=>el.id!==action.payload.id)
        }
        case "ADD-TASK":{
            let newTask =  { id: v1(), title: action.payload.title, isDone: true }
            return [newTask,...state]
        }

        default :return state
    }
}

type TsarType =removeTaskACType|addTaskACType


type removeTaskACType =ReturnType<typeof removeTaskAC>
export  const  removeTaskAC =(id: string)=> {
    return {
        type:'REMOVE-TASK',
        payload : {
            id:id
        }
    } as const
}

type addTaskACType =ReturnType<typeof addTaskAC>
export  const  addTaskAC =(title: string)=> {
    return {
        type:'ADD-TASK',
        payload : {
            title:title
        }
    } as const
}
