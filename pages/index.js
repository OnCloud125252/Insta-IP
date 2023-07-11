import { useEffect, useState } from "react";

import IPbox from "@/components/IPbox";
import Information from "@/components/Information";


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

    useEffect(() => {
        (async () => {
            const response = await (await fetch("/api/get-ip")).json();
            console.log(JSON.stringify(response, null, 4));
            setClientInfo(response);
        })();
    }, []);

    return (
        <main style={{ overflow: "hidden" }}>
            <IPbox IPaddress={clientInfo.proxyIPs[0]} />
            <Information clientInfo={clientInfo} />
        </main>
    );
}