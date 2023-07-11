import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="110x110" href="/images/favicon.png" />
                <link rel="icon" type="image/png" sizes="any" href="/images/favicon.png" />

                <meta name="author" content="OnCloud" />
                <meta name="theme-color" content="#0a1929" />
                <meta name="description" content="Get your IP address and browser information!" />
                <meta name="copyright" content="Copyright (c) by OnCloud" />

                <meta httpEquiv="content-Type" content="text/html; charset=utf-8" />
                <meta httpEquiv="content-language" content="zh-TW" />
                <meta httpEquiv="widow-target" content="_top" />

                {/* <!-- Twitter --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="What is my IP?" />
                <meta name="twitter:description" content="Get your IP address and browser information!" />
                <meta name="twitter:site" content="@" />
                <meta name="twitter:creator" content="@" />
                <meta name="twitter:image" content="/images/logo.png" />

                {/* <!-- Open Graph --> */}
                <meta property="og:url" content="https://ip.on-cloud.tw/" />
                <meta property="og:title" content="What is my IP?" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Get your IP address and browser information!" />
                <meta property="og:image" content="/images/logo.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
