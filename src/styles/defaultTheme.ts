const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
  light: 300,
};

export const defaultTheme = {
  colors: {
    // Primary
    brandPrimary: '#6225a2',
    brandPrimaryDark: '#4f2081',
    brandPrimaryTint90: '#f7f2fc',
    brandPrimaryTint95: '#faf7fd',
    brandPrimaryLight: '#7234b4',
    brandPrimaryLighter: '#a17cc7',
    brandPrimaryLightest: '#cebbe2',

    // Secondary
    brandSecondary: '#182f7c',
    brandSecondaryLight: '#325ad3',
    brandSecondaryLighter: '#7098f8',

    // Grayscale
    grayWhite: '#ffffff',
    grayLightest: '#fbfcfc',
    grayLighter: '#f1f3f4',
    grayLight: '#dee1e5',
    graySubtle: '#abb5be',
    grayMild: '#7c8894',
    grayDefault: '#5f6b77',
    grayDark: '#384048',
    gray60: '#5f6877',
    grayOffWhite: '#d6def6',
    whiteSmoke: '#f5f5f5',

    // Greenscale
    greenDefault: '#50c992',
    greenTint80: '#dcf4e9',

    coral: '#df4771',
    coralDark: '#c62a55',
    tangerine: '#faa119',
    gold: '#f5ca16',
    emerald: '#50c992',
    forest: '#249e6d',
    informational: '#325ad3',
    contextualInfo: '#a9bded',
    contextualBlue: '#2d51be',

    veryPoorAlert: '#df4771',
    veryPoorAlertDark: '#c62a55',
    veryGood: '#50c992',
    excellent: '#249e6d',
    good: '#f5ca16',
    fairWarning: '#faa119',
    noData: '#7c8894',

    poorWarning: '#faa219',
    poorWarningContainer: '#fffaf3',
    poorWarningBorder: '#feecd1',
    warningTint50: '#fdd08c',

    critical20: '#f9dae3',
    modalSmallOverlay: '#dcdbde',
    anchorTagBlue: '#0000ee',

    info100: '#f0f3fc',
  },
  fonts: {
    weight: { ...fontWeights },
  },
  noWrap: `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  button: `
    font-family: primary, sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 0.25px;
    margin: $margin;
    line-height: 1.25rem;
  `,
  caption: `
    font-family: primary, sans-serif;
    font-weight: ${fontWeights.regular};
    font-size: 0.75rem;
    letter-spacing: 0.25px;
    line-height: 1.5rem;

    @media (max-width: 639px)  {
      line-height: 1rem;
    }
  `,
  header: {
    xxl: `
      font-family: primary, sans-serif;
      font-weight: ${fontWeights.bold};
      font-size: 3.75rem;
      letter-spacing: 0.5px;
      line-height: 4.5rem;
    `,
    xl: `
      font-family: primary, sans-serif;
      font-weight: ${fontWeights.bold};
      font-size: 3.125rem;
      letter-spacing: 0.5px;
      line-height: 3.75rem;

      @media (max-width: 639px) {
        font-size: 2rem;
        letter-spacing: 0;
        line-height: 2.25rem;
      }
    `,
    large: `
      font-family: primary, sans-serif;
      font-weight: ${fontWeights.light};
      font-size: 1.125rem;
      letter-spacing: 0.25px;
      line-height: 1.5rem;
      margin: $margin;

      @media (min-width: 639px) {
        line-height: 1.25rem;
        font-size: 1rem;
        letter-spacing: 0;
      }
    `,
    medium: `
      font-family: primary, sans-serif;
      font-weight: ${fontWeights.bold};
      font-size: 2rem;
      letter-spacing: 0.75px;
      line-height: 2.5rem;
    `,
    small: `
      font-family: primary, sans-serif;
      font-weight: ${fontWeights.bold};
      font-size: 1.5rem;
      letter-spacing: 0px;
      line-height: 1.75rem;

      @media (max-width: 639px) {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }
    `,
    xs: `
      font-family: primary, sans-serif;
      font-weight: ${fontWeights.bold};
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0px;
    `,
  },
  body: {
    small: `
      font-family: primary, sans-serif;
      font-weight: ${fontWeights.light};
      font-size: 0.875rem;
      letter-spacing: 0.25px;
      line-height: 1.25rem;
    `,
  },
};
