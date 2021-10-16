import {CREATE,FETCH_ALL,FETCH_USER_DATA,FETCH_UPLOAD_CNT,FETCH_POST,UPDATE} from "../constants/actionTypes";

export default (state={posts:[],upvotesInfo:[]},action) => {
    switch (action.type) {
        case FETCH_ALL:
            return {...state, posts:action.payload};
        case FETCH_USER_DATA:
            return {...state, posts:action.payload};
        case FETCH_UPLOAD_CNT:
                return {...state, upvotesInfo:action.payload.count};                        
        case FETCH_POST:
            return {...state,post:action.payload.post}; 
        case CREATE:
            return {...state,posts:action.payload};

        case UPDATE:
            console.log("in reducers")
            return {...state, posts: state.posts.map((post)=>post._id===action.payload._id?action.payload:post)}
        default:
            return state;
    }
}