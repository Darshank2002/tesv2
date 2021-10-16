import {CREATE_USER, FETCH_USER} from "../constants/actionTypes";
export default(user=[],action)=>{
    switch (action.type) {
        case CREATE_USER:
            return action.payload;
        case FETCH_USER:
                console.log(action.payload)
                return action.payload;    
        default:
            return user;
    }
}