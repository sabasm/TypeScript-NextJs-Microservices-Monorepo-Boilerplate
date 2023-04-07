import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/layout/themes';
import Footer from '@/layout/components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
