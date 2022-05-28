import { createSlice } from "@reduxjs/toolkit";
import { addLikedCat, removeLikedCat } from "../helpers/helpers";

const initialState = {
    data: null,
    likedData: JSON.parse(window.localStorage.getItem('liked')) || []
}

const catsSlice = createSlice({
    initialState,
    name: 'cats',
    reducers: {
        updateCats: (state, action) => {
            state.data = action.payload.map(item => {
                return {
                    ...item,
                    liked: false
                }
            })
        },
        toggleCat: (state, { payload }) => {
            state.data.forEach(item => {
                if (item.id === payload.id) {
                    if (item.liked) {
                        item.liked = false
                        removeLikedCat(payload.id)
                    } else if (!item.liked) {
                        item.liked = true
                        addLikedCat(item)
                    }
                } else if (item.id !== payload.id && payload.liked) {
                    removeLikedCat(payload.id)
                }
            })
            state.likedData = JSON.parse(window.localStorage.getItem('liked'))
        },
    }
})

export const { updateCats, toggleCat } = catsSlice.actions
export default catsSlice.reducer