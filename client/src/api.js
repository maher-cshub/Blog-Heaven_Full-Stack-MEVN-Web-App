import axios from "axios";

const url = "http://localhost:8000";

export default class API{

    //GET ALL POSTS
    static async allPosts()
    {
        const res = await axios.get(`${url}/posts/all`);
        return res.data;
    }

    //SEE POST
    static async seePost(post_id)
    {
        const res = await axios.get(`${url}/posts/see/${post_id}`);
        return res.data;
    }

    //GET USER POSTS
    static async userPosts(username)
    {
        const res = await axios.get(`${url}/posts/${username}`);
        return res.data;
    }

    //CREATE POST
    static async createPost(post)
    {   
        const res = await axios.post(`${url}/posts/create`,post);
        return res.data;
    }

    //UPDATE POST
    static async updatePost(post_id,post)
    {   console.log(post_id)
        console.log(post.values())
        const res = await axios.patch(`${url}/posts/update/${post_id}`,post);
        return res.data;
    }

    //DELETE POST
    static async deletePost(post_id)
    {
        const res = await axios.delete(`${url}/posts/delete/${post_id}`);
        return res.data;
    }

}