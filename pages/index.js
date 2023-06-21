import { useEffect, useState } from "react";

import IPbox from "@/components/IPbox";
import IProute from "@/components/IProute";


export default function Index() {
    const [clientInfo, setClientInfo] = useState({
        proxyIPs: [],
        userAgent: {
            ua: "",
            browser: {
                name: "",
                version: "",
                major: ""  // @deprecated
            },
            engine: {
                name: "",
                version: ""
            },
            os: {
                name: "",
                version: ""
            },
            device: {
                model: "",
                type: "",
                vendor: ""
            },
            cpu: {
                architecture: ""
            }
        }
    });
    const [serverIP, setServerIP] = useState("");

    useEffect(() => {
        (async () => {
            const response = await (await fetch("/api/get-ip", { headers: { "x-forwarded-for": "1.1.1.1, 2.2.2.2, 3.3.3.3" } })).json();
            console.log(JSON.stringify(response, null, 4));
            setClientInfo(response);
        })();
        setServerIP(location.hostname);
    }, []);

    return (
        <main>
            <IPbox IPaddress={clientInfo.proxyIPs[0]} />
            <IProute routes={clientInfo.proxyIPs} />
            <h1>Server IP : {serverIP}</h1>
            <h1>IP address : {clientInfo.proxyIPs[0]}</h1>
            <h1>Browser : {clientInfo.userAgent.browser.name} {clientInfo.userAgent.browser.version} with engine {clientInfo.userAgent.engine.name} {clientInfo.userAgent.engine.version}</h1>
            <h1>System : {clientInfo.userAgent.os.name} {clientInfo.userAgent.os.version}</h1>
        </main>
    );
}