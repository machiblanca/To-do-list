
import {FILTER_ALL} from '../actionTypes'
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from '../actionTypes'

const initialTodoState = {
    nextId: 1// first state , you can exists or can´t exist with data existir o no en el estado inicial
    
}

export const todos = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO: { //return state and data modificated but not replace only add more information
          console.log(state.data)  
          return (
                {
                    ...state,
                    data: {
                        ...state.data,
                        [state.nextId]: {
                            completed: false, //payload: Element in action(ADD_TODO) to modify
                            content: action.payload.content
                        },
                    },

                    nextId: state.nextId + 1
                    
                }
            )
        }
        case TOGGLE_TODO:{
            console.log(action.payload)
            return(
                {
                    ...state,
                    data:{
                        ...state.data,
                        [action.payload.id]:{
                            ...state.data[action.payload.id],
                            completed: !(state.data[action.payload.id].completed)
                        }
                    }
                }
            )
        }

        default: {
            return state
        }
    }
}


export const visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return ({
                activeFilter: action.payload.filter
            })
        }

        default: {
            return state;
        }
    }
}