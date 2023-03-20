import axios from "axios"

export const getPostsRequests = async () => await axios.get("/posts")

export const createPostRequests = async (post) =>{
const form = new FormData()
for(let key in post){
form.append(key, post[key])
}

return await axios.post("/posts", form, {
    headers: {
        "Content-Type": "multipart/form-data",
    }
})
}
export const deletePostRequests = async (id) => await axios.delete("/posts/" + id)

export const getPostRequests = async (id) => await axios.get("/posts/" + id)

export const updatePostRequests = async (id,fields) => await axios.put("/posts/" + id, fields)

