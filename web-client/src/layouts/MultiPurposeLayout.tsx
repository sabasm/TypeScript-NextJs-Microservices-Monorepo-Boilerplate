import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import styled from 'styled-components';
import MainContent from './components/MainContent';

interface MultiPurposeLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  menu?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
}

/**
 * Layout for multipurpose pages.
 *
 * The layout structure is as follows:
 *   <header>
 *   <menu>
 *   <maincontent>
 *   <sidebar>
 *   <footer>
 */

// const Layout = styled.div`
//   display: grid;
//   grid-template-areas:
//     'header header header'
//     'content content content'
//     'footer footer footer';
//   grid-template-columns: 1fr 2fr 1fr;
//   grid-template-rows: 1fr 4fr 1fr;
//   grid-gap: 1rem;
//   height: 100vh;
//   width: 100vw;
//   @media (min-width: ${({ theme: { breakpoints: { md } } }) => md}) {
//     grid-template-areas:
//       'header header header'
//       'menu content sidebar'
//       'footer footer footer';
//     grid-template-columns: 1fr 2fr 1fr;
//     grid-template-rows: 1fr 4fr 1fr;
//   }
//   @media (min-width: ${({ theme: { breakpoints: { lg } } }) => lg}) {
//     grid-template-areas:
//       'header header header'
//       'menu content sidebar'
//       'footer footer footer';
//     grid-template-columns: 1fr 2fr 1fr;
//     grid-template-rows: 1fr 4fr 1fr;
//   }

//   @media (min-width: ${({ theme: { breakpoints: { xl } } }) => xl}) {
//     grid-template-areas:
//       'header header header'
//       'menu content sidebar'
//       'footer footer footer';
//     grid-template-columns: 1fr 2fr 1fr;
//     grid-template-rows: 1fr 4fr 1fr;
//   }
// `;
const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'header header header'
    'content content content'
    'footer footer footer';
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1vh 10fr 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  grid-gap: 1rem;
`;

const Content = styled.section`
grid-area:content;
display:flex;
flex-direction:row;
`
export default function MultiPurposeLayout({
  children,
  header,
  menu,
  sidebar,
  footer,
}: MultiPurposeLayoutProps) {
  return (
    <Layout>
      <Header>{header}</Header>
      <Content>
        <Menu>{menu}</Menu>
        <MainContent>{children}</MainContent>
        <Sidebar>{sidebar}</Sidebar>
      </Content>
      <Footer>{footer}</Footer>
    </Layout>
  );
}
