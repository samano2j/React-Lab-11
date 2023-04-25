import { createSlice } from '@reduxjs/toolkit'

import { getData, getDataById, getDataByName, getDataByQuantity } from '../middleware/api'
import { updateItemQty } from './helper'

const initialState = {
    data: [],
    loading: 'idle',
    error: null,
    selectedItem: null,
}

const mainSlice = createSlice({
    name: 'oyastu',
    initialState,
    reducers: {
        addQty: (state, action) => updateItemQty(state, action, 1),
        removeQty: (state, action) => updateItemQty(state, action, -1),
    },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                }
            })
            .addCase(getData.fulfilled, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.data = action.payload
                }
            })
            .addCase(getData.rejected, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.error = action.error.message
                }
            })
            .addCase(getDataById.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                }
            })
            .addCase(getDataById.fulfilled, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.selectedItem = action.payload
                }
            })
            .addCase(getDataById.rejected, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.error = action.error.message
                }
            })
            .addCase(getDataByName.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                }
            })
            .addCase(getDataByName.fulfilled, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.selectedItem = action.payload
                }
            })
            .addCase(getDataByName.rejected, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.error = action.error.message
                }
            })
            .addCase(getDataByQuantity.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                }
            })
            .addCase(getDataByQuantity.fulfilled, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.selectedItem = action.payload
                }
            })
            .addCase(getDataByQuantity.rejected, (state, action) => {
                if (state.loading === 'pending') {
                    state.loading = 'idle'
                    state.error = action.error.message
                }
            })
    }
})

export const { addQty, removeQty, setData } = mainSlice.actions
export default mainSlice.reducer