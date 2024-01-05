import { createContext } from "react";

const BlogContext = createContext()

export const BlogProvider = ( { childern } ) => {
    return <BlogContext.Provider value={50}>
     { childern }
    </BlogContext.Provider>
};

export default BlogContext;