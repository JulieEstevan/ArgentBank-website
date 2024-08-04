import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

import { updateUserName } from "../redux/reducer/profileSlice.jsx"
import Field from "./Field.jsx"
import Button from "./Button.jsx"
import "../style/components/editname.css"

function EditName() {
    const dispatch = useDispatch()
    const userProfile = useSelector((state) => state.user)
    const userToken = useSelector((state) => state.auth.token)

    const [isOpen, setIsOpen] = useState(false)
    const [editedUserName, setEditedUserName] = useState(userProfile.userName)

    const saveChange = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.put(
                "http://localhost:3001/api/v1/user/profile",
                {userName: editedUserName,},
                {headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userToken}`,
                },}
            )
            if (response.status === 200) {
                const responseData = response.data
                dispatch(updateUserName(editedUserName))
                setIsOpen(false)
            } else {
                if (response.status === 401) {
                const errorData = response.data
                console.error("Error 401 - editName : ", errorData.message)
                }
                if (response.status === 400) {
                const errorData = response.data
                console.error("Error 400 - editName : ", errorData)
                } else {
                console.error("Error - editName : ", response.statusText)
                }
            }
        } catch (error) {
            console.error("Another Error - editName : ", error)
        }
    }

    useEffect(() => {
        setEditedUserName(userProfile.userName)
        console.log("useEffect object : ", userProfile.userName)
        }, [userProfile.userName])

   return (
      <section className="section-user">
         {!isOpen ? (
            <>
               <h2 className="title-user">
                  Welcome back
                  <br />
                  {!userProfile.userName ? (
                     <>
                        {userProfile.firstName} {userProfile.lastName}
                     </>
                  ) : (
                     <>{userProfile.userName} </>
                  )}
                  !
               </h2>
               <Button
                  content="Edit Name"
                  className="edit"
                  onClick={() => {
                     setIsOpen(true)
                  }}
               />
            </>
         ) : (
            <>
               <h2 className="title-user">Edit user info</h2>
               <div className="modal">
                  <form onSubmit={saveChange}>
                     <Field label="User Name :" type="text" content="userName" onChange={(event) => setEditedUserName(event.target.value)} />
                     <Field label="First Name :" type="text" content="firstName" readOnly="readOnly" placeholder={userProfile.firstName} />
                     <Field label="Last Name :" type="text" content="lastName" readOnly="readOnly" placeholder={userProfile.lastName} />
                     <Button content="Save" width="88px" height="40px" />
                  </form>
                  <Button
                     content="Cancel"
                     style={{ backgroundColor: "red" }}
                     onClick={() => {
                        setIsOpen(false)
                     }}
                  />
               </div>
            </>
         )}
      </section>
   )
}

export default EditName