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
    setValue: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  }
})

export const { setValue } = userSlice.actions

export const userReducer = userSlice.reducer;
