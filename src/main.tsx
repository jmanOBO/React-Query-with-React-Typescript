import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import {apiRequest} from "./api/apiRequests"


apiRequest.interceptors.request.use((req)=>{
 console.log(req)
 return req
},
(error)=>{
  console.log(error)
  return Promise.resolve(error)
}
)
const queryClient=new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/*"/>
        </Routes>
        
      </BrowserRouter>
    
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
