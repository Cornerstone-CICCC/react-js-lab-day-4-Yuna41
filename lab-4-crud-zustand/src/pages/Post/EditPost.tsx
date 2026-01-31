import { useEffect, useState, type SubmitEvent } from "react"
import { usePostStore, type Post } from "../store/post.store"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"

const EditPost = () => {
  const posts = usePostStore(s => s.posts)
  const { id } = useParams<{ id: string}>()
  const targetPost: Post | undefined = posts.find((p) => p.id === id && !p.isDeleted)
  const [titleInput, setTitleInput] = useState<string>('')
  const [contentInput, setContentInput] = useState<string>('')

  const updatePost = usePostStore(s => s.updatePost)
  const navigate = useNavigate()

  useEffect(() => {
    if(targetPost) {
      setTitleInput(targetPost.title)
      setContentInput(targetPost.content)
    }
  }, [targetPost])

  const handleUpdatePost = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!id) return

    updatePost(id, titleInput, contentInput)
    toast.success('Updated post successfully.')
    navigate('/posts')
  }

  if(!id) return <p>Invalid Post ID.</p>
  if(!targetPost) return <p>Post not found</p>

  return (
    <div>
      <h2>Update Post</h2>
      <form onSubmit={handleUpdatePost}>
        <label>
          <span>Title</span>
          <input
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
          />
        </label>
        <label>
          <span>Content</span>
          <textarea
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
          />
        </label>
        <button type="submit">Update Post</button>
      </form>
    </div>
  )
}

export default EditPost