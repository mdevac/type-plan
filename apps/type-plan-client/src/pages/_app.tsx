import { AppProps } from "next/app";
import Head from "next/head";
import "styles/styles.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>طرح تیپ</title>
      </Head>
      <main dir="rtl">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
