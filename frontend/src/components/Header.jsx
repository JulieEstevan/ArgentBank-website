import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setSignIn, setSignOut } from "../redux/reducer/authSlice"

import logo from "../assets/argentBankLogo.png"
import "../style/components/header.css"

function Header() {
   const user = useSelector((state) => state.auth.isAuthenticated)

   const dispatch = useDispatch()
   const userProfile = useSelector((state) => state.user)

   const userSignOut = () => {
      dispatch(setSignOut())
   }

   useEffect(() => {
      const token = localStorage.getItem("authToken")
      if (token) {
         dispatch(setSignIn({ token }))
      }
   }, [dispatch])

   return (
      <header>
         <Link to="/">
            <img className="logo" src={logo} alt="Argent Bank" />
            <h1 className="sr-only">Argent Bank</h1>
         </Link>

         <nav className="nav">
            {user ? (
               <>
                  <Link to="/profile" className="link">
                     <i className="fa fa-user-circle icon-header"></i>
                     {!userProfile.userName ? <>{userProfile.firstName}</> : <>{userProfile.userName}</>}
                  </Link>
                  <Link to="/Login" onClick={userSignOut} className="link">
                     <i className="fa fa-sign-out icon-header"></i>
                     Sign Out
                  </Link>
               </>
            ) : (
               <Link to="/Login" className="link">
                  <i className="fa fa-user-circle icon-header"></i>
                  Sign In
               </Link>
            )}
         </nav>
      </header>
   )
}

export default Header