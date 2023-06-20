import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    accessToken: ''
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAccessToken: (state, action) => {
			state.accessToken = action.payload
		}
	}
})

export const { setAccessToken } = userSlice.actions
export default userSlice.reducer