const BASE_COLORS = {
  pureBlack: '#000000',
  black: '#0B0A0A',
  darkGray: '#929396',
  gray: '#E5E7EB',
  lightGray: '#F2F2F2',
  red: '#E54040',
  green: '#25A764',
  blue: '#0A68F4',
  lightBlue: '#EDF4FE',
};

const COLORS = {
  border: BASE_COLORS.gray,
  button: {
    // primary: BASE_COLORS.blue,
    // secondary: BASE_COLORS.white,
  },
  text: {
    primary: BASE_COLORS.black,
    // secondary: BASE_COLORS.white,
    // tertiary: BASE_COLORS.black80,
    // cancel: BASE_COLORS.red,
    // activeTab: BASE_COLORS.blue,
    // inactiveTab: BASE_COLORS.darkGrayBlue,
    // activeInfo: BASE_COLORS.lightBlack,
    // inactiveInfo: BASE_COLORS.lightGrayBlue,
    // placeholder: BASE_COLORS.black36,
  },
};

type TextColorType = keyof (typeof COLORS)['text'];

export { BASE_COLORS, COLORS, TextColorType };
