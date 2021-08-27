import axios from "axios";

export const loadPost = async () =>{
    let result = (await axios.get("https://jsonplaceholder.typicode.com/posts")).data;
    let photo = (await axios.get("https://jsonplaceholder.typicode.com/photos")).data;

    const newPosts = result.map((post, index)=>{
        return {...post, cover: photo[index].url}
    })

    return newPosts;
}