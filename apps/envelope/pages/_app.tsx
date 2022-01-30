import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import '/styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to envelope!</title>
      </Head>
      <main className="app">
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </main>
    </>
  );
}

export default CustomApp;
