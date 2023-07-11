import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="110x110" href="/images/favicon.png" />
                <link rel="icon" type="image/png" sizes="any" href="/images/favicon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
