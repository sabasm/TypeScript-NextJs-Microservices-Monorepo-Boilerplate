import { css } from "styled-components";

export const flexColumns = css`
  display: flex;
  flex-direction: column;
`;
export const flexColumnsCenterTop = css`
  ${flexColumns}
  align-items: center;
  justify-content: start;
`;
export const flexColumnsCenterCenter = css`
  ${flexColumns}
  align-items: center;
  justify-content: center;
`;

export const flexColumnsCenterBottom = css`
  ${flexColumns}
  align-items: center;
  justify-content: end;
`;

export const flexRows = css`
  display: flex;
  flex-direction: row;
`;

export const flexRowsCenterLeft = css`
  ${flexRows}
  align-items: start;
  justify-content: center;
`;
export const flexRowsCenterCenter = css`
  ${flexRows}
  align-items: center;
  justify-content: center;
`;
export const flexRowsCenterRight = css`
  ${flexRows}
  align-items: end;
  justify-content: center;
`;

const navbarHeight = "var(--navbar-height)";

export const minMaxPageLimits = css`
  width: 100%;
  height: calc(100vh - ${navbarHeight});
  max-height: calc(2560px - ${navbarHeight});
  min-height: calc(720px - ${navbarHeight});
  min-width: 320px;
`;
