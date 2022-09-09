import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Comments } from "./components/Comments"
import { Gallery } from "./components/Gallery"
import { Nav } from './components/Nav'
import { Posts } from "./components/Posts"
import { API_URL, POSTS_SIZE } from "./components/utils/constants"


const App = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchDAta = async () => {
      const response = await fetch(`${API_URL}/posts?_limit=${POSTS_SIZE}`)
      const data = await response.json()
      await new Promise((r) => setTimeout(r, 5000))
      setPosts(data)
    }
    fetchDAta()
  }, [])

  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/posts" element={<Posts posts={posts} />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>

  );
}
export default App;