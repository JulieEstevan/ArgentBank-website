import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from "axios"
import "../style/pages/login.css"

import { setSignIn } from "../redux/reducer/authSlice.jsx"
import Field from "../components/Field.jsx"
import Button from "../components/Button.jsx"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState("")
    const [errorMsg, setErrorMsg] = useState(false)

    const submitForm = async (event) => {
        event.preventDefault()
        const formData = {
            email: email,
            password: password,
        }

        try {
            const response = await axios.post("http://localhost:3001/api/v1/user/login", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })

            if (response.status === 200) {
                const responseData = response.data
                const token = responseData.body.token
                localStorage.setItem("authToken", token)
                dispatch(setSignIn({ token }))
                navigate("/profile")
            } else {
                setErrorMsg(response.statusText)
            }
        } catch {
            setErrorMsg("An error as occured.")
        }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h2>Sign In</h2>
                <form onSubmit={submitForm}>
                    {errorMsg && <p>{errorMsg}</p>}

                    <Field label="Username" content="email" type="email" onChange={(e) => setEmail(e.target.value)} required />
                    <Field label="Password" content="password" type="password" onChange={(e) => setPassword(e.target.value)} required />

                    <div className="input-remember">
                        <input type="checkbox" name="remember-me" id="remember-me" onChange={() => setRemember(!remember)} checked={remember} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <Button className="sign-in-button" content="Sign In" />
                </form>
            </section>
        </main>
    )
}

export default Login