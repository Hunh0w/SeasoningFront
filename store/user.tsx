import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    connected: false
  },
  reducers: {
    setUserConnected(state, action: PayloadAction<boolean>) {
        state.connected = action.payload
      }
  }
})

export const { setUserConnected } = userSlice.actions
export default userSlice.reducer