import axios from 'axios';

const url = "https://guarded-sierra-46766.herokuapp.com/posts";

export const fetchPosts = () => {
     return axios.get(url);

}

export const createPost = (newPost) => {
     axios.post(url,newPost); 
}