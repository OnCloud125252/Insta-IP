import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Skeleton from "@mui/material/Skeleton";

import styles from "./Information.module.css";


export default function Information({ clientInfo }) {
    const [copyBrowserSuccess, setCopyBrowserSuccess] = useState(false);
    const [copySystemSuccess, setCopySystemSuccess] = useState(false);

    return (
        <div className={styles.informationContainer}>
            <Card sx={{ height: "fit-content", outline: "1px solid rgb(76, 84, 88)" }}>
                <CardActionArea
                    onClick={() => {
                        clientInfo.userAgent.browser.name ?
                            copyToClipboard(`${clientInfo.userAgent.browser.name} ${clientInfo.userAgent.browser.version} ${clientInfo.userAgent.engine.name} ${clientInfo.userAgent.engine.version}`)
                            :
                            console.warn("This value is not ready yet!");
                        setCopyBrowserSuccess(true);
                    }}
                    onMouseEnter={() => setCopyBrowserSuccess(false)}
                    onMouseLeave={() => setTimeout(() => {
                        setCopyBrowserSuccess(false);
                    }, 200)}
                >
                    <Tooltip title={clientInfo.userAgent.browser.name ? copyBrowserSuccess ? "Copied !" : "Click to copy" : ""} placement="top" followCursor={true}>
                        <CardContent sx={{ width: "500px" }}>
                            <Typography variant="h5" gutterBottom>
                                Browser
                            </Typography>
                            <Typography variant="body2" gutterBottom>{
                                clientInfo.userAgent.browser.name ? (
                                    <>{clientInfo.userAgent.browser.name} {clientInfo.userAgent.browser.version}</>
                                ) : (
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: "0.875rem" }} />
                                )
                            }</Typography>
                            <Typography variant="h5" gutterBottom>
                                Engine
                            </Typography>
                            <Typography variant="body2">{
                                clientInfo.userAgent.browser.name ? (
                                    <>{clientInfo.userAgent.engine.name} {clientInfo.userAgent.engine.version}</>
                                ) : (
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: "0.875rem" }} />
                                )
                            }</Typography>
                        </CardContent>
                    </Tooltip>
                </CardActionArea>
            </Card>
            <Card sx={{ height: "fit-content", outline: "1px solid rgb(76, 84, 88)" }}>
                <CardActionArea
                    onClick={() => {
                        clientInfo.userAgent.browser.name ?
                            copyToClipboard(`${clientInfo.userAgent.os.name} ${clientInfo.userAgent.os.version}`)
                            :
                            console.warn("This value is not ready yet!");
                        setCopySystemSuccess(true);
                    }}
                    onMouseEnter={() => setCopySystemSuccess(false)}
                    onMouseLeave={() => setTimeout(() => {
                        setCopySystemSuccess(false);
                    }, 200)}
                >
                    <Tooltip title={clientInfo.userAgent.browser.name ? copySystemSuccess ? "Copied !" : "Click to copy" : ""} placement="top" followCursor={true}>
                        <CardContent sx={{ width: "500px" }}>
                            <Typography variant="h5" gutterBottom>
                                System
                            </Typography>
                            <Typography variant="body2">{
                                clientInfo.userAgent.browser.name ? (
                                    <>{clientInfo.userAgent.os.name} {clientInfo.userAgent.os.version}</>
                                ) : (
                                    <Skeleton variant="text" animation="wave" sx={{ fontSize: "0.875rem" }} />
                                )
                            }</Typography>
                        </CardContent>
                    </Tooltip>
                </CardActionArea>
            </Card>
        </div >
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
    }
}