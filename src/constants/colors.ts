const BASE_COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#929396',
  gray: '#E5E7EB',
  lightGray: '#F2F2F2',
  red: '#E54040',
  green: '#25A764',
  blue: '#0A68F4',
  lightBlue: '#EDF4FE',
};

const COLORS = {
  primaryBackgroundColor: BASE_COLORS.white,
  border: BASE_COLORS.gray,
  button: {
    primary: BASE_COLORS.white,
  },
  icon: {
    activeTabIcon: BASE_COLORS.black,
    searchIcon: BASE_COLORS.darkGray,
  },
  shadow: BASE_COLORS.darkGray,
  text: {
    primary: BASE_COLORS.black,
    secondary: BASE_COLORS.darkGray,
    up: BASE_COLORS.green,
    down: BASE_COLORS.red,
  },
  textInput: {
    backgroundColor: BASE_COLORS.lightGray,
  },
};

const SHADOW = {
  shadowColor: COLORS.shadow,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.3,
  shadowRadius: 10,
};

type TextColorType = keyof (typeof COLORS)['text'];

export { BASE_COLORS, COLORS, SHADOW, TextColorType };
