import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/layouts/themes';

export default function App({ Component, pageProps }: AppProps) {
  console.log(' on App- dark theme = ', darkTheme)
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
