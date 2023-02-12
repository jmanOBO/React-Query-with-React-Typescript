import {useQuery} from "react-query"
import { fetchUsers } from "../api/apiRequests"
import { UserType } from "../interfaces/FetchDataTypes"
import {Link} from "react-router-dom"
const Users = () => {
    const {isLoading,isError, error, data}=useQuery<UserType[],Error>("users", fetchUsers,{
     
    })

    
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isError){
    return <div>Error ...{error.message}</div>
  }

  return (
      <>
    {
      data?.map(d=>(
        <p key={d.id}><Link to={`/users/${d.id}`}>{d.name}</Link></p> 
      ))
    }
    </>
  )
}

export default Users