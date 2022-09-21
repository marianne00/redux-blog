import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: 'Marianne' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Elena' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer