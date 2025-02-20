import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string
}

const initialState: UserState = {
  name: ""
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerPlayer: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    logoutPlayer: (state) => {
      state.name = "";
    },
  }
})

export const { registerPlayer, logoutPlayer } = userSlice.actions

export const userReducer = userSlice.reducer;
