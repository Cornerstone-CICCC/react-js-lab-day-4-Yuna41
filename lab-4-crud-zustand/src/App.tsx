import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageLayout from "./layouts/pageLayout"
import Home from "./pages/Home"
import PostList from "./pages/Post/PostList"
import PostDetail from "./pages/Post/PostDetail"
import EditPost from "./pages/Post/EditPost"
import AddPost from "./pages/Post/AddPost"
import DeletedPost from "./pages/Post/DeletedPost"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/new" element={<AddPost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
          <Route path="/trash" element={<DeletedPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App