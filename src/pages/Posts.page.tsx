import { ChangeEvent, useState } from "react"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { fetchPosts, postPost } from "../api/apiRequests"
import { PostDataType } from "../interfaces/FetchPostDataType"

const Posts = () => {
    const [title, setTitle]=useState("");
    const [body, setBody]=useState("");
    const queryClient=useQueryClient()
    const {mutate}=useMutation(postPost, {
        onSuccess: (data)=>{
            
            // queryClient.invalidateQueries("posts")
            queryClient.setQueriesData("posts",(oldQueryData: any)=>{
                
                return [...oldQueryData, data.data]
            })
        }
    })
    const {isError, isLoading,error, data}=useQuery<PostDataType[],Error>("posts", fetchPosts,{
        select: (data)=>{
               return data.reverse().slice(0,12)
        } 
    });

    const canSave=Boolean(title.trim()) && Boolean(body.trim());
    const handleSubmit=(e: ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        mutate({title,body})
        setTitle("")
        setBody("")
    }
    if(isLoading) {
        return <div>Loading ...</div>
    }
    if(isError){
        return <div> An Error occured: {error.message}</div>
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
            </div>
            <br/>
            <div>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} style={{width: "200px"}} placeholder="Body"/>
            </div>
            <button disabled={!canSave}>Submit</button>
        </form>
        {
            data?.map(post=><p key={post.id} style={{background: "#eee"}}>{post.title}</p>)
        }
    </div>
  )
}

export default Posts