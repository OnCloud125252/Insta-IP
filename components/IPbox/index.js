import { useState } from "react";

import styles from "./IPbox.module.css";


export default function IPbox({ IPaddress }) {
    const [copySuccess, setCopySuccess] = useState(false);

    return (
        <div className={styles.IPboxContainer}>
            <div className={styles.IPbox}
                onClick={async () => copyToClipboard(IPaddress)}
                onMouseEnter={() => setCopySuccess(false)}
                onMouseLeave={() => setTimeout(() => {
                    setCopySuccess(false);
                }, 200)}
            >
                <div className={joinClasses(styles.labelTitleContainer, "noSelect")}>
                    <div className={styles.labelTitle}>Your Public IP address</div>
                </div>
                <div className={joinClasses(styles.IPaddress, "noSelect")}>{IPaddress}</div>
                <div className={joinClasses(styles.labelTooltipContainer, "noSelect")}>
                    <div className={styles.labelTooltip}>{copySuccess ? "Copied !" : "Click to copy"}</div>
                </div>
            </div>
        </div>
    );

    /**
    * @param {string} text Text to copy.
    */
    async function copyToClipboard(text) {
        if ("clipboard" in navigator) {
            await navigator.clipboard.writeText(text);
        } else {
            document.execCommand("copy", true, text);
        };
        return setCopySuccess(true);
    }
}

function joinClasses(...classes) {
    return [...classes].join(" ");
}