import { Link } from "react-router-dom";
import "../Login/Login.css";

function Login() {
    return (
        <>
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
                    <Link
                        to="/forgotyourpassword"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <p className="login-buttons">Forgot Your Password?</p>
                    </Link>
                    <Link
                        to="/createyouraccount"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <p className="login-buttons">Create Account</p>
                    </Link>
                </div>
            </form>
        </>
    );
}

export default Login;
