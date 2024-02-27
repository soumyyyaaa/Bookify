import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PersistentText = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div
                    style={{
                        backgroundColor: "black",
                        padding: "1%",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        zIndex: "1",
                        color: "white",
                        textAlign: "center",
                        fontFamily: "Josefin Sans",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    <p style={{ margin: "0" }}>
                        FREE SHIPPING & RETURN - MONEY BACK GUARANTEE - ONLINE
                        SUPPORT 24/7
                    </p>
                    <button
                        onClick={handleClose}
                        style={{
                            background: "none",
                            border: "none",
                            color: "white",
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            )}
            <div style={{ marginBottom: isVisible ? "4%" : "0" }}></div>
        </>
    );
};

export default PersistentText;
