import toast from "react-hot-toast"
import { usePostStore } from "../store/post.store"

const DeletedPost = () => {
  const posts = usePostStore(s => s.posts)
  const toggleDelete = usePostStore(s => s.toggleDelete)
  const deletePost = usePostStore(s => s.deletePost)
  const deletedPosts = posts.filter((p) => p.isDeleted)

  const handleToggle = (id: string) => {
    toggleDelete(id)
    toast.success('Recovered post successfully.')
  }

  const handleDelete = (id: string) => {
    const res = confirm('Are you sure you want to delete this post completely?')
    if(res){
      deletePost(id)
    }
  }

  return (
    <div>
      <h2>Trash List</h2>
      {deletedPosts.length <= 0 ? (
        <p>Posts not yet.</p>
      ) : (
        <ul>
          {deletedPosts.map((p) => (
            <li key={p.id}>
              <span>{p.title}</span>
              <button onClick={() => handleToggle(p.id)}>Recover</button>
              <button onClick={() => handleDelete(p.id)}>Delete permanently</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DeletedPost