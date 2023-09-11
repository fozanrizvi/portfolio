import { createGlobalStyle } from 'styled-components';

import regular from '../assets/fonts/primary/regular.woff';
import regular2 from '../assets/fonts/primary/regular.woff2';
import medium from '../assets/fonts/primary/medium.woff';
import medium2 from '../assets/fonts/primary/medium.woff2';
import bold from '../assets/fonts/primary/bold.woff';
import bold2 from '../assets/fonts/primary/bold.woff2';
import light from '../assets/fonts/primary/bold.woff';
import light2 from '../assets/fonts/primary/bold.woff2';

export default createGlobalStyle`
    @font-face {
      font-family: 'primary';
      src: local('primary'), local('primary'),
      url(${light2}) format('woff2'),
      url(${light}) format('woff');
      font-weight: 300;
      font-style: normal;
    }

    @font-face {
      font-family: 'primary';
      src: local('primary'), local('primary'),
      url(${regular2}) format('woff2'),
      url(${regular}) format('woff');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'primary';
      src: local('primary'), local('primary'),
      url(${medium2}) format('woff2'),
      url(${medium}) format('woff');
      font-weight: 500;
      font-style: normal;
    }

    @font-face {
      font-family: 'primary';
      src: local('primary'), local('primary'),
      url(${bold2}) format('woff2'),
      url(${bold}) format('woff');
      font-weight: 700;
      font-style: normal;
    }
`;
