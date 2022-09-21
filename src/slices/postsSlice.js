import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {
            userId: 1,
            id: 1,
            title: 'Asdasjdnasjd jasdn asjd asjd jasj djaisdg hu12eusduays',
            body: 'Asdasjdnasjd jasdn asjd asjd jasj djaisdg hu12eusduays'
        },
        {
            userId: 1,
            id: 2,
            title: 'Asdasjdnasjd jasdn asjd asjd jasj djaisdg hu12eusduays',
            body: 'Asdasjdnasjd jasdn asjd asjd jasj djaisdg hu12eusduays'
        }
    ],
    status: 'idle',
    error: null
}
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.posts = action.payload
            })
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loadiing'

            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }

})
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return response.json()
})
export default postsSlice.reducer