import { Link } from "react-router-dom"
import { usePostStore } from "../store/post.store"
// import PostListItem from "./PostListItem"

const PostList = () => {
  const posts = usePostStore(s => s.posts)
  const activePosts = posts.filter((p) => !p.isDeleted)

  return (
    <div>
      <h2>Posts List</h2>
      <Link to="/posts/new">
        <button>Create Post</button>
      </Link>
      {activePosts.length <= 0 ? (
        <p>Posts not yet.</p>
      ) : (
        <ul>
          {activePosts.map((p) => (
            <li key={p.id}><Link to={`/posts/${p.id}`}>{p.title}</Link></li>
            // <PostListItem key={p.id} p={p} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default PostList