import { useRef } from "react";

import styles from "./GithubIconAnimation.module.css";


export default function GithubIconAnimation() {
    const ref = useRef(null);

    return (
        <div className={styles.github_icon_container} style={{ position: "absolute", top: "0", margin: "25px" }}>
            <a className={styles.github_icon} href="https://github.com/OnCloud125252/IP-address" target="_blank">
                <lottie-player
                    ref={ref}
                    speed="0.8" loop autoplay
                    src="/images/github_icon_animation.json"
                ></lottie-player>
                <span>
                    @
                </span>
                <p>
                    OnCloud125252/IP-address
                </p>
            </a>
        </div>
    );
}