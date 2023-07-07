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

export const { actions: userActions} = userSlice

export const allUserActions = {
    ...userActions
}

export default userSlice.reducer