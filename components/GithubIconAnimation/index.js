import { useRef } from "react";

import styles from "./GithubIconAnimation.module.css";


export default function GithubIconAnimation({projectURL}) {
    const ref = useRef(null);

    return (
        <div className={styles.github_icon_container} style={{ position: "absolute", top: "0", margin: "25px" }}>
            <a className={styles.github_icon} href={projectURL} target="_blank">
                <lottie-player
                    ref={ref}
                    speed="0.8" loop autoplay
                    src="/images/github_icon_animation.json"
                ></lottie-player>
                <span>
                    @
                </span>
                <p>
                    {projectURL.split("/").slice(3).join("/")}
                </p>
            </a>
        </div>
    );
}