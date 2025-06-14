import React, { useState } from "react";
import Modal from "../components/Modal";
import './NewsLetter.css';

function Newsletter() {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(prev => !prev); // Recommended way to toggle state
    };

    return (
        <div id="newsletter">
            <div className="newsletter-container">
                <div className="newsletter-content">
                    <h1>Become part of the Adventure and Tourist</h1>
                    <p>
                        Tamil Nadu offers a variety of adventure and tourist experiences,
                        from exploring historical temples and beaches to engaging in outdoor activities
                        like trekking and paragliding. The state's diverse landscapes, including hills,
                        forests, and coastline, make it a great destination for adventure tourism.
                    </p>
                    <button
                        onClick={handleModal}
                        className="newsletter-content-join-btn"
                    >
                        Join to the Adventure
                    </button>

                    <Modal
                        showModal={modal}
                        onClose={handleModal}
                    />
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
