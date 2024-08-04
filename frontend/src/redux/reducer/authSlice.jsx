import { createSlice } from "@reduxjs/toolkit"

const checkToken = () => {
   console.log("checkToken authSlice : ", localStorage.getItem("authToken"))
   return localStorage.getItem("authToken") || null
}

const initialState = {
   token: checkToken(),
   isAuthenticated: false,
}

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setSignIn(state, action) {
         state.token = action.payload.token // màj token
         console.log("authSlice state.token : ", state.token)
         state.isAuthenticated = true
         localStorage.getItem("localStorage authToken", state.token)
      },
      setSignOut(state) {
         state.token = null // Réinit token
         state.isAuthenticated = false
         localStorage.removeItem("authToken")
      },
   },
})

export const { setSignIn, setSignOut } = authSlice.actions
export default authSlice.reducer