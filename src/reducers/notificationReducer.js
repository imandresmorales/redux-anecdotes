import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

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

export const setNotification = (vote, time) => {
  return async dispatch => {
    dispatch(showNotification(`${vote}`))
    setTimeout(() => {
      dispatch(hideNotification(``))
  }, time*1000);

  }
}

export default notificationSlice.reducer