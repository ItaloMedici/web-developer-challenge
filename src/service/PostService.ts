import { Post } from "../models/Post"
import posts from "./mock/posts.json"

export const fetchPosts = () => {
  return Promise.resolve(posts) as Promise<Post[]>
}

export const getStoragedPosts = () => {
  return localStorage.getItem("posts");
}

export const storagePosts = (posts: Post[]) => {
  localStorage.setItem("posts", JSON.stringify(posts))
}