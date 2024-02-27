import React from "react";
import { useState, useEffect } from "react";
import Loader from "../../Components/Loader";

function CreateYourAccount() {
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
                        <h1 className="login-heading">Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="login-fields"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="login-fields"
                        />
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
                        <button className="sign-in">Create</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default CreateYourAccount;
