import { Link } from "react-router-dom"
import type { Post } from "../store/post.store"

type Props = {
  p: Post
}

const PostListItem = ({p}: Props) => {
  return (
    <li><Link to={`/posts/${p.id}`}>{p.title}</Link></li>
  )
}

export default PostListItem