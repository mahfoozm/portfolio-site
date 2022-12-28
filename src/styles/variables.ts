import { css } from 'styled-components';

const Variables = css`
  :root {
    // Colors
    --navy-blue: #102039;
    --white: #f1f8f7;

    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    // Font size
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 50px;

    // Other
    --nav-height: 100px;
    --max-width: 1400px;
    --transition3: all 0.3s ease-in-out;
    --transition2: all 0.2s ease-in-out;
    --bdr: 4px;
  }
`;

export default Variables;
