import { NavLink } from "react-router-dom"
import "../style/pages/user.css"
import AccountPreview from "../components/AccountPreview"

function User() {
    return (
        <main className="bg-dark">
            <div className="header">
                <h1>Welcome back<br />"username" !</h1>
                <NavLink>
                    <button className="edit-button">Edit Name</button>
                </NavLink>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {/* ajouter un map du user.account */}
            <AccountPreview name="Argent Bank Checking (x8349)" amount="$2,082.79" status="Available Balance" />
            <AccountPreview name="Argent Bank Savings (x6712)" amount="$10,928.42" status="Available Balance" />
            <AccountPreview name="Argent Bank Credit Card (x8349)" amount="$184.30" status="Current Balance" />
        </main>
    )
}

export default User