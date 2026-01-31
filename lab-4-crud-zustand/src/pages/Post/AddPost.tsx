import { useState, type SubmitEvent } from "react"
import { usePostStore } from "../store/post.store"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const AddPost = () => {
  const addPost = usePostStore(s => s.addPost)
  const [titleInput, setTitleInput] = useState<string>('')
  const [contentInput, setContentInput] = useState<string>('')
  const navigate = useNavigate()

  const handleAddPost = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!titleInput.trim() || !contentInput.trim()){
      toast.error('Both Title and Content are required.')
      return
    }

    addPost(titleInput, contentInput)
    toast.success('Created post successfully.')
    navigate('/posts')
  }

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleAddPost}>
        <label>
          <span>Title</span>
          <input
            type="text"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            placeholder="Enter post title..." />
        </label>
        <label>
          <span>Content</span>
          <textarea
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
            placeholder="Enter post content"
          />
        </label>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default AddPost