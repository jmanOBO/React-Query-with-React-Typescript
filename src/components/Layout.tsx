import { Link, Outlet } from "react-router-dom"



const Layout = () => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Home (users)</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/pagination">Pagination</Link></li>
            <li><Link to="/UsersDynamic">Users Dynamic</Link></li>
            <li><Link to="/Postsinfinite">Posts Infinite</Link></li>
            
        </ul>
    </nav>
    
    {
        <Outlet/>
    }
    </>
  )
}

export default Layout