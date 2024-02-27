import React from "react";
import { Link } from "react-router-dom";

function ForgotYourPassword() {
    return (
        <>
            <form className="login-form">
                <h1 className="login-heading">Reset your password</h1>

                <p
                    style={{ fontFamily: "Josefin Sans, sans-serif" }}
                    className="fyp-p"
                >
                    We will send you an email to reset your password
                </p>
                <input
                    type="email"
                    placeholder="Email"
                    className="login-fields"
                />
                <br />
                <button className="sign-in">Submit</button>
                <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <div className="login-btn">
                        <p className="login-buttons">Cancel</p>
                    </div>
                </Link>
            </form>
        </>
    );
}

export default ForgotYourPassword;
