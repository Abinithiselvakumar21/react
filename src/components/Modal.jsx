import React from "react";
import './Modal.css';

function Modal({ showModal, onClose }) {
    if (!showModal) return null;

    return (
        <div className="overlay" onClick={onClose}>
            <form
                onClick={(e) => e.stopPropagation()}
                className="signup"
            >
                <div className="header-title">
                    <h1>Create Account</h1>
                    <p onClick={onClose} className="close-btn">X</p>
                </div>

                <div className="signup-field">
                    <input type="text" name="username" id="username" className="signup-input" required />
                    <label className="signup-label" htmlFor="username">User Name</label>
                </div>

                <div className="signup-field">
                    <input type="email" name="email" id="email" className="signup-input" required />
                    <label className="signup-label" htmlFor="email">Email</label>
                </div>

                <div className="signup-field">
                    <input type="password" name="password" id="password" className="signup-input" required />
                    <label className="signup-label" htmlFor="password">Password</label>
                </div>

                <button>Login</button>
            </form>
        </div>
    );
}

export default Modal;
