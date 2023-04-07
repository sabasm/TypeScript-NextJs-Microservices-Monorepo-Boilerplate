import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/layout/themes';
import Footer from '@/layout/components/Footer';
import { flexRowsCenterTop, minMaxPageLimits } from '@/layout/themes/mixins';

const PageWrapper = styled.main`
  ${minMaxPageLimits}
  ${flexRowsCenterTop}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
}
