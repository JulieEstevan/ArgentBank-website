import "../style/components/signin.css"

function SignIn() {
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form method="post">
                <div className="input-wrapper">
                    <label htmlFor="email">Username</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" name="remember-me" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <input type="submit" value="Sign In" className="sign-in-button"/>
            </form>
        </section>
    )
}

export default SignIn