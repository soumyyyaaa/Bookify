import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./PersistentText.css";

const PersistentText = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div style={{}} className="persistent-text-div">
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
