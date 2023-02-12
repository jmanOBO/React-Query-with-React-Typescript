import { useInfiniteQuery } from "react-query"
import { fetchMore } from "../api/apiRequests"
import { PostDataType } from "../interfaces/FetchPostDataType"
import React from "react"


const PostsInfinite = () => {
    const {hasNextPage,isFetchingNextPage,data,error,isError,isLoading,fetchNextPage}=useInfiniteQuery<PostDataType[], Error>(
        {
            queryKey: ["postsInfinite"],
            queryFn: fetchMore,
            getNextPageParam: (_lastPage, pages)=>{

                
              if(pages.length<10){
                
                return pages.length+1
              }else{
                return undefined
    
              }
            }
        }
    )
   
  if(isLoading){
    return <div>Loading ...</div>
  }

  if(isError){
   return <div>An Error occured: {error.message}</div>
  }
    
  return (
    <>
    <div>
       {
        data?.pages.map((group,i)=>(
            <React.Fragment key={i}>
              {group.map((pages, index)=>(
                <p key={index}>{pages.title}</p>
              ))}
            </React.Fragment>
        ))
       } 
    </div><br/>
    <button onClick={()=>fetchNextPage()}>{
       isFetchingNextPage?
       "Fetching ...":
       hasNextPage ? "Load More":" Nothing to load..!"


    
     }</button>
    </>
    
  )
}

export default PostsInfinite