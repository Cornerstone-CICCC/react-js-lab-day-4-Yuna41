import { Link, useNavigate, useParams } from "react-router-dom"
import { usePostStore, type Post } from "../store/post.store"
import toast from "react-hot-toast"

const PostDetail = () => {
  const posts = usePostStore(s => s.posts)
  const { id } = useParams<{id: string}>()
  const targetPost: Post | undefined = posts.find((p) => p.id === id && !p.isDeleted)
  const toggleDelete = usePostStore(s => s.toggleDelete)
  const navigate = useNavigate()

  const handleToggle = (id: string) => {
    toggleDelete(id)
    toast.success('Deleted post successfully.')
    navigate('/posts')
  }

  if(!id) return <p>Invalid Post ID.</p>
  if(!targetPost) return <p>Post not found</p>

  return (
    <div>
      <h2>{targetPost.title}</h2>
      <p>{targetPost.content}</p>
      <Link to="/posts">Back to Post List</Link>
      <Link to={`/posts/${targetPost.id}/edit`}>
        <button>Update Post</button>
      </Link>
      <button onClick={() => handleToggle(id)}>Delete Post</button>
    </div>
  )
}

export default PostDetail