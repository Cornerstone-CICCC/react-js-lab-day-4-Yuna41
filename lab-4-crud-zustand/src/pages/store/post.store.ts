import { create } from "zustand";
import { v4 as uuidv4 } from 'uuid' 
import { persist } from "zustand/middleware";

export interface Post {
  id: string;
  title: string;
  content: string;
  isDeleted: boolean;
}

type State = {
  posts: Post[]
}

type Action = {
  addPost: (title: string, content: string) => void,
  updatePost: (id: string, title: string, content: string) => void,
  toggleDelete: (id: string) => void,
  deletePost: (id: string) => void,
}

export const usePostStore = create<State & Action>()(
  persist(
    (set) => ({
      posts: [
        { id: 'test01', title: 'title01', content: 'flsdfkoekfo', isDeleted: false },
        { id: 'test02', title: 'title02', content: 'flsdfkoekfel,f;eaffo', isDeleted: true },
        { id: 'test03', title: 'title03', content: 'flsdfkaf;lpelf@l@foekfo', isDeleted: false },
      ],
      addPost: (title, content) => set((state) => ({
        posts: [{
          id: uuidv4(),
          title,
          content,
          isDeleted: false,
        }, ...state.posts]
      })),
      updatePost: (id, title, content) => set((state) => ({
        posts: state.posts.map((post) => post.id === id
          ? { ...post, title, content }
          : post
        )
      })),
      toggleDelete: (id) => set((state) => ({
        posts: state.posts.map((post) => post.id === id
          ? { ...post, isDeleted: !post.isDeleted}
          : post
        )
      })),
      deletePost: (id) => set((state) => ({
        posts: state.posts.filter((post) => post.id !== id)
      }))
    }), {
      name: 'post-storage'
    }
  )
)