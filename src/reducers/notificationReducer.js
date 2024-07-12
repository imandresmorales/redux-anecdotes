import { createSlice } from "@reduxjs/toolkit";

const initialState = 'NO NOTIFICATION'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      return action.payload
    },
    hideNotification(state, action) {
      return action.payload
    }
  }
})

export const {showNotification, hideNotification} = notificationSlice.actions
export default notificationSlice.reducer