import React, { useContext, useEffect, useState } from "react";
import { Post } from "../models/Post";
import { fetchPosts, getStoragedPosts, storagePosts } from "../service/PostService";

type PostContextData = {
  posts: Post[];
  sendPost(post: Post): void;
  deletePost(postID: string): void;
};

const PostContext = React.createContext<PostContextData>({} as PostContextData);

export const usePost = () => {
  return useContext(PostContext);
}

export const PostProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const posts = getStoragedPosts();
    if (posts) {
      setPosts(JSON.parse(posts))
    } else {
      (async () => {
        const result = await fetchPosts();
        setPosts(result)
        storagePosts(result)
      })()
    }
  }, [])

  const sendPost = (post: Post) => {
    setPosts(oldPosts => {
      let newPosts = Array.from(oldPosts);

      post.id = generatePostID(post.author);
      newPosts.push(post)

      storagePosts(newPosts)

      return newPosts
    })
  };

  const deletePost = (postID: string) => {
    console.log(postID)
    setPosts(oldPosts => {
      let newPosts = oldPosts.filter(p => p.id !== postID);
      
      storagePosts(newPosts)

      return newPosts;
    })
  }

  const generatePostID = (authorName: string) => {
    return new Date().getTime()+authorName.trim()
  }

  return (
    <PostContext.Provider value={{ posts, sendPost,deletePost }}>
      {children}
    </PostContext.Provider>
  );
};
