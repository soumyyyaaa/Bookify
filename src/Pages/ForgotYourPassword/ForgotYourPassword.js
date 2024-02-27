import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../Components/Loader";

function ForgotYourPassword() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
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
            )}
        </div>
    );
}

export default ForgotYourPassword;
