import {useParams} from "react-router-dom"
import { UserType } from "../interfaces/FetchDataTypes";
import {useQuery, useQueryClient} from "react-query"
import { fetchUserById } from "../api/apiRequests";
import {useEffect, useState, useRef} from "react"
const UserDetails = () => {
    const queryClient=useQueryClient()
    const rd=useRef<string>("")
    const id= useParams().id!;
    const {isLoading, isError, error, data}=useQuery<UserType, Error>(["users",id],()=>fetchUserById(id),{
        initialData: ()=>{
            const user=queryClient.getQueryData("users") as UserType[]
            const singleUser=user?.find(user=>user.id===parseInt(id))
            if(singleUser) return singleUser
            return undefined;

            
        }
    })

    const [temp,setTemp]=useState("");

    useEffect(()=>{
       
        let i=0;
        let cur: string;
        rd.current=JSON.stringify(data)
         let interval=setInterval(()=>{
            if(data!==null){
                

                if(i<rd.current?.length){
                    cur=rd.current[i]
                    setTemp(prev=>prev.concat(cur))
                    i++
                  }
            }
           
        
         },100)
         return ()=>{
            clearInterval(interval)
            rd.current="";
        }
       },[data])

   if(isLoading){
    return <div>Loading ...</div>
   }
   if(isError){
    return <div>Error ... {error.message}</div>
   }


 
  return (
    <div>
        {data? <blockquote style={{background: "#eee"}}>{temp}</blockquote>: <p>No data !</p>}
    </div>
    
   
  )
}

export default UserDetails