import React from 'react';
import styled from 'styled-components';
import applySharedStyles from '@/layouts/themes/util/applySharedStyles';
import applyResponsiveStyles from '@/layouts/themes/util/applyResponsiveStyles';

function logHR(from: string): void {
  console.log(`${from}`.padStart(80, '='));
}

function logStylesProps(props: any): void {
  logHR('logStylesProps');
  console.log('Syled components props');
  console.log(props);
}

// const ButtonStyle = styled.button`
//   background-color: ${props => {
//     logStylesProps(props);
//     return props.theme.sharedStyles.background
//   }};
//   `;
const ButtonStyle = styled.button`
  ${applySharedStyles};
  `;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const Button = ({ children, onClick = mockHandleClick, ...rest }: Props) => (
  <ButtonStyle onClick={onClick} {...rest}>
    {children}
  </ButtonStyle>
);

export default Button;

function mockHandleClick(): void {
  console.log('Button clicked (mock function)');
}

//props in styled components and styled components as props
// const Button = styled.button`
//   background-color: ${props => props.color};
// `;

// <Button color="#ff00ff">Pink Button</Button>

//reusing styled components styles
// const Button = styled.button`
//   padding: 10px;
//   margin: 5px;
//   background: blue;
//   border: none;
//   color: white;
// `;

// const Link = styled(Button).attrs({ as: 'a' })`
//   text-decoration: none;
// `;

//Defining upper level theme
// If you are using TypeScript, you may also want to define the type of your theme object and use it in your styled components2.For example:

// import { DefaultTheme } from 'styled-components';

// declare module 'styled-components' {
//   export interface DefaultTheme {
//     sharedStyles: {
//       background: string;
//     };
//   }
// }

// const theme: DefaultTheme = {
//   sharedStyles: {
//     background: 'blue'
//   }
// };

// const ButtonStyle = styled.button`
//   background-color: ${props => props.theme.sharedStyles.background};
// `;
// This way, you can get type checking and autocompletion for your theme props in your styled components2.Does this make sense ?👍
