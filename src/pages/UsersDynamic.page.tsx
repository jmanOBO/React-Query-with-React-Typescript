import { useQueries } from "react-query"
import { fetchDynamicUsers } from "../api/apiRequests"
import { UserType } from "../interfaces/FetchDataTypes"
import { UseQueryOptions } from "react-query"

interface Props {
    ids: [number,number]
}
const UsersDynamic = ({ids}: Props) => {
   const results= useQueries(
       ids.map<UseQueryOptions<UserType[],Error>>((id)=>{
         return {
            queryKey: ["users",`${id}`],
            queryFn: ()=>fetchDynamicUsers(id)
         }
       })
        
    )
  return (
    <>
   
    {results.map((r,i)=>(
       <p key={i}>{JSON.stringify(r.data)}</p>
    ))}
  
  
  </>
  )
}

export default UsersDynamic