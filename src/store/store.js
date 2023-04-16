import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './slices/posts/postsSlice'
import { addPost, ignoreEmptyComment, removePosts } from './middlewares/posts';
import { searchReduser } from './slices/search/searchSlice';
import { ignoreUpperCaseAndWhitespace } from './middlewares/search';
import { usersReducer } from './slices/users/usersSlice';
import { messagesReducer } from './slices/messages/messagesSlice';
import { ignoreEmptyMessage } from './middlewares/messages';


const store = configureStore({
    reducer: {
        posts:postReducer,
        search: searchReduser,
        users: usersReducer,
        messages: messagesReducer
    },
    middleware: (getDefaultMiddlewares) =>{
        return [...getDefaultMiddlewares(), addPost,removePosts, ignoreEmptyComment, ignoreEmptyMessage, ignoreUpperCaseAndWhitespace]
    }
})
export default store