import Document, { Html, Head, Main, NextScript } from 'next/document';
import { currentEnv } from '../config';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () => originalRenderPage({
            // useful for wrapping the whole react tree
            enhanceApp: App => App,
            // userful for wrapping in a per-page basis
            enhanceComponent: Component => Component
        });

        // Run the parent `getInitialProps` using `ctx` that now includes our custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html>
                <Head>
                    <script src="//www.travel.co.jp/js/common/loadadara.js"></script>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                    <script src="https://www.travel.co.jp/__utm.js"></script>
                    <script src="https://apis.google.com/js/platform.js"
                        dangerouslySetInnerHTML={{
                            __html: `
                                    {
                                        lang: "ja"
                                    }
                                `
                        }}>
                    </script >

                    {/* <!-- Google Tag Manager --> */}
                    <script dangerouslySetInnerHTML={{
                        __html: `
                            (function (w, d, s, l, i) {
                                w[l] = w[l] || []; w[l].push({
                                  'gtm.start':
                                    new Date().getTime(), event: 'gtm.js'
                                }); var f = d.getElementsByTagName(s)[0],
                                  j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                              })(window, document, 'script', 'dataLayer', '${currentEnv.google_api_config.trackingDomain.taskManagerId}');
                                `
                    }} />
                    {/* <!-- End Google Tag Manager --> */}

                    {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript>
                        <iframe id="gg-iframe" src="https://www.googletagmanager.com/ns.html?id=GTM-N474KHD" height="0" width="0" style={{
                            display: 'none',
                            visibility: 'hidden'
                        }}></iframe>
                    </noscript>

                    {/* <!-- End Google Tag Manager (noscript) --> */}
                </body>
            </Html>
        );
    }
}

export default MyDocument;