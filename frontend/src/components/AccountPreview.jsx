import { NavLink } from "react-router-dom"
import "../style/components/accountpreview.css"

function AccountPreview({name, amount, status}) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{name}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{status}</p>
            </div>
            <NavLink>
                <button className="transaction-button">View transactions</button>
            </NavLink>
        </section>
    )
}

export default AccountPreview