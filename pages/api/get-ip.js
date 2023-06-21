import UAParser from "ua-parser-js";
import { networkInterfaces } from "os";


const nets = networkInterfaces();
const results = {};

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === "string" ? "IPv4" : 4;
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

export default function handler(req, res) {
    let proxyIPs = req.headers["x-forwarded-for"] ?? null;
    let userAgent = req.headers["user-agent"] ?? null;

    if (proxyIPs) {
        proxyIPs = proxyIPs.replace(" ", "").split(",");
    }
    if (userAgent) {
        const parser = new UAParser(userAgent);
        userAgent = parser.getResult();
    }

    res.status(200).json({
        proxyIPs,
        userAgent,
        results
    });
}
