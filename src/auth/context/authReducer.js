import { types } from "../types/types";


export const authReducer = ( state = {}, action ) => {

    if (action.type === types.login) {
        return {
            ...state,
            logged: true,
            user: action.payload
        };
    } else if (action.type === types.logout) {
        return {
            logged: false,
        };
    } else {
        return state;
    }
    

    // switch (action.type) {
    //     case types.login:
    //         return {
    //             ...state,
    //             logged: true,
    //             user: action.payload
    //         } 

    //     case types.logout:
    //         return {
    //             logged: false,
    //         } 

    //     default:
    //         return state;
    // }

}