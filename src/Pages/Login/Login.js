import "../Login/Login.css";

function Login() {
    return (
        <>
            <div className="container-pages">
                <div className="opacity-container-pages"></div>
                <h2 className="heading-pages">Account</h2>
            </div>
            <form className="login-form">
                <h1 className="login-heading">Login</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="login-fields"
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    className="login-fields"
                />
                <br />
                <button className="sign-in">Sign In</button>
                <hr />
                <div className="login-btn">
                    <p className="login-buttons">Forgot Your Password?</p>
                    <p className="login-buttons">Create Account</p>
                </div>
            </form>
        </>
    );
}

export default Login;
