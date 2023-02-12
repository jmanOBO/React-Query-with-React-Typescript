import axios from "axios";


export const apiRequest=axios.create({
  baseURL: "http://localhost:3000",
  
});


export const fetchUsers=async()=>{
    const response=await apiRequest.get("/users");
    return response.data;
}

export const fetchUserById= async(id: string)=>{
  const response=await apiRequest.get(`/users/${id}`)
  return response.data;

}

export const fetchPosts=async()=>{
   const response=await apiRequest.get("/posts");
   return response.data;
}

export const fetPostsByPage=async(page: number, limit: number=5)=>{
  const response=await apiRequest.get(`/posts?_limit=${limit}&_page=${page}`)
  return response.data;
}

export const fetchDynamicUsers= async(id: number)=>{
  const response=await apiRequest.get(`/users/${id}`)
  return response.data
}
export const fetchMore= async({pageParam=1})=>{
  const response=await apiRequest.get(`/posts?_limit=10&_page=${pageParam}`)
  return response.data
}
export const postPost= async(post: {title: string, body: string})=>{
  return await apiRequest.post(`/posts`,post)
 
}
