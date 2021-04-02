import { createContext } from "react";

// create a context storage
const PostsStorage = createContext();

export const PostsProvider = PostsStorage.Provider;

export default PostsStorage;