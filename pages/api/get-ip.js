import UAParser from "ua-parser-js";


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
        userAgent
    });
}
