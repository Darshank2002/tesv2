import axios from 'axios';
// const urlPost = "https://theengineeringsphere.herokuapp.com/home";
// const urlUser = "https://theengineeringsphere.herokuapp.com/user";
const urlPost = "http://localhost:5000/home";
const urlUser = "http://localhost:5000/user";

//POST RELATED
export const fetchPosts = () => axios.get(urlPost)
export const fetchPost = (id) => axios.get(`${urlPost}/content/${id}`)
export const fetchUserData = (uid,dataType) => axios.get(`${urlPost}/${dataType}/${uid}`)
export const fetchUploadCnt = (uid) => axios.get(`${urlPost}/h/upvotecnt/${uid}`)
export const createPost = (newPost) => axios.post(urlPost,newPost);

// export const createUser = (newUser) => axios.post(`${urlPost}/createUser`,newUser);
export const upvote = (id,uid) => { 
    return axios.patch(`${urlPost}/${id}/${uid}/upvote`)};


//USER RELATED

export const fetchProfile = (uid) => axios.get(`${urlUser}/${uid}`);
export const createProfile = (newUser) => axios.post(urlUser,newUser) ;