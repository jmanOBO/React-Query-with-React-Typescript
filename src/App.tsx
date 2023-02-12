import Users from "./pages/Users.page"
import {Routes, Route} from "react-router-dom"
import UserDetails from "./pages/UserDetails.page"
import Layout from "./components/Layout"
import Posts from "./pages/Posts.page"
import Pagination from "./pages/Pagination.page"
import UsersDynamic from "./pages/UsersDynamic.page"
import PostsInfinite from "./pages/PostsInfinite.page"

const App = () => {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route element={<Users/>} path="/"/>
        <Route element={<UserDetails/>} path="/users/:id"/>
        <Route element={<Posts/>} path="/posts"/>
        <Route element={<Pagination/>} path="/pagination"/>
        <Route element={<UsersDynamic ids={[1,2]}/>} path="/UsersDynamic"/>
        <Route element={<PostsInfinite/>} path="/Postsinfinite"/>
        
      </Route>
    </Routes>
    
    )
}

export default App