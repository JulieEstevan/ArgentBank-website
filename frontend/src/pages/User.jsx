import { useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from "react"
import { setProfile } from "../redux/reducer/profileSlice"
import "../style/pages/user.css"

import AccountPreview from "../components/AccountPreview"
import EditName from "../components/EditName"

function User() {
    const dispatch = useDispatch()

    async function fetchProfileData(authToken) {
        try {
            const response = await axios.post(
                "http://localhost:3001/api/v1/user/profile",
                {},
                {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
                }
            )
            if (response.status === 200) {
                const responseData = response.data
                dispatch(setProfile(responseData))
            } else {
                console.error("Error response : ", response.statusText)
            }
        } catch (error) {
            console.error("Error", error)
        }
    }
    
    useEffect(() => {
      const authToken = localStorage.getItem("authToken")
      if (authToken) {
         fetchProfileData(authToken)
      }
    })
    return (
        <main className="bg-dark">
            <EditName />
            <h2 className="sr-only">Accounts</h2>
            <AccountPreview name="Argent Bank Checking (x8349)" amount="$2,082.79" status="Available Balance" />
            <AccountPreview name="Argent Bank Savings (x6712)" amount="$10,928.42" status="Available Balance" />
            <AccountPreview name="Argent Bank Credit Card (x8349)" amount="$184.30" status="Current Balance" />
        </main>
    )
}

export default User