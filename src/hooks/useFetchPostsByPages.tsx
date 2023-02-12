
import { useQuery } from 'react-query'
import { fetPostsByPage } from '../api/apiRequests'
import { PostDataType } from '../interfaces/FetchPostDataType'


const useFetchPostsByPages = (page: number) => {
    return useQuery<PostDataType[],Error>(["post",page], ()=>fetPostsByPage(page),{
        keepPreviousData: true

    })
   
    
 
}

export default useFetchPostsByPages