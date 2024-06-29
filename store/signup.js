import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    details: {},
    competitions: Array(5).fill({}).map((c, id) => ({
        name: '20th Asian Game - Achi Nagoya 2026 (Winter)',
        date: 'YYYY-MM-DD ~ YYYY-MM-DD',
        location: 'Pyeongchang, Gangwon-do, Korea',
        id
    }))
}

export default createSlice({
    name: 'signup',
    initialState,
    reducers: {
        updateDetails(state, action) {
            state.details = {
                ...state.details,
                ...action.payload,
            }
        }
    }
})