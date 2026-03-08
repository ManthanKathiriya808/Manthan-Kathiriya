"use client";

import React, { useState } from 'react';
import './DownloadButton.css';

const DownloadButton = () => {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setDownloading(true);

            // The animation takes 3.5s + 0.4s (showInstalledMessage)
            // We trigger the download after the animation completes
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = '/manthan kathiriya resume.pdf';
                link.download = 'manthan-kathiriya-resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Reset the button state after some time or keep it "Open"
                // For now, let's keep it in "Open" state as per the Uiverse design
            }, 3900);
        }
    };

    return (
        <div className="download-container">
            <label className="label">
                <input
                    type="checkbox"
                    className="input"
                    onChange={handleDownload}
                    disabled={downloading}
                />
                <span className="circle">
                    <svg
                        className="icon"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 19V5m0 14-4-4m4 4 4-4"
                        ></path>
                    </svg>
                    <div className="square"></div>
                </span>
                <p className="title">Download CV</p>
                <p className="title">Saved!</p>
            </label>
        </div>
    );
};

export default DownloadButton;
