import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import styles from "./Information.module.css";


export default function Information({ clientInfo }) {
    return (
        <div className={styles.informationContainer}>
            <Card sx={{ height: "fit-content", outline: "1px solid rgb(76, 84, 88)" }}>
                <CardActionArea
                    onClick={() => copyToClipboard(`${clientInfo.userAgent.browser.name} ${clientInfo.userAgent.browser.version} ${clientInfo.userAgent.engine.name} ${clientInfo.userAgent.engine.version}`)}
                >
                    <Tooltip title="Click to copy" placement="top" followCursor={true}>
                        <CardContent sx={{ width: "500px" }}>
                            <Typography variant="h5" gutterBottom>
                                Browser
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {clientInfo.userAgent.browser.name} {clientInfo.userAgent.browser.version}
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                Engine
                            </Typography>
                            <Typography variant="body2">
                                {clientInfo.userAgent.engine.name} {clientInfo.userAgent.engine.version}
                            </Typography>
                        </CardContent>
                    </Tooltip>
                </CardActionArea>
            </Card>
            <Card sx={{ height: "fit-content", outline: "1px solid rgb(76, 84, 88)" }}>
                <CardActionArea
                    onClick={() => copyToClipboard(`${clientInfo.userAgent.os.name} ${clientInfo.userAgent.os.version}`)}
                >
                    <Tooltip title="Click to copy" placement="top" followCursor={true}>
                        <CardContent sx={{ width: "500px" }}>
                            <Typography variant="h5" gutterBottom>
                                System
                            </Typography>
                            <Typography variant="body2">
                                {clientInfo.userAgent.os.name} {clientInfo.userAgent.os.version}
                            </Typography>
                        </CardContent>
                    </Tooltip>
                </CardActionArea>
            </Card>
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
    }
}