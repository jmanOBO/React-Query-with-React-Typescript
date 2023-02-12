import { useState } from "react"
import useFetchPostsByPages from "../hooks/useFetchPostsByPages"

const Pagination = () => {
  const numberOfPosts=100;
  const [pageNumber, setPageNumber]=useState(1)
  const numOfPages= numberOfPosts/5;


  const {isError,isLoading, isFetching,error,data}=useFetchPostsByPages(pageNumber)

  const handleNext=()=>{
     setPageNumber(prev=>prev+1)
  }
  const handlePrev=()=>{
     setPageNumber(prev=>prev-1)
  }
  if(isLoading){
    return <div>Loading ...</div>
  }
  if(isError){
    return <div>An Error occured: {error.message}</div>
  }
  return (
    <div>
      {data?.map(post=><p key={post.id} style={{background: "#eee"}}>{post.title}</p>)}

      <br/>
      <button disabled={pageNumber===1} onClick={handlePrev}>Previous</button> &nbsp; &nbsp; <button disabled={pageNumber===numOfPages} onClick={handleNext}>Next</button>
    
    {
      isFetching && <p>Fetching Data ...</p>
    }
    </div>
  )
}

export default Pagination