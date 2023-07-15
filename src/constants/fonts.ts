import { TextStyle } from 'react-native/types';

const FONT_SIZES = {
  xs: 12,
  s: 14,
  m: 16,
  l: 20,
  xl: 28,
};

const FONT_VARIANTS = {
  regular: { fontFamily: 'Inter-Regular', fontWeight: '400' } as TextStyle,
  semiBold: { fontFamily: 'Inter-SemiBold', fontWeight: '600' } as TextStyle,
  bold: { fontFamily: 'Inter-Bold', fontWeight: '700' } as TextStyle,
};

const TEXT_VARIANTS = {
  heading: {
    ...FONT_VARIANTS.bold,
    fontSize: FONT_SIZES.xl,
  } as TextStyle,
  title: {
    ...FONT_VARIANTS.semiBold,
    fontSize: FONT_SIZES.m,
  } as TextStyle,
  subtitle: {
    ...FONT_VARIANTS.regular,
    fontSize: FONT_SIZES.s,
  } as TextStyle,
  bold: {
    ...FONT_VARIANTS.bold,
    fontSize: FONT_SIZES.s,
  } as TextStyle,
  semiBold: {
    ...FONT_VARIANTS.semiBold,
    fontSize: FONT_SIZES.s,
  } as TextStyle,
  regular: {
    ...FONT_VARIANTS.regular,
    fontSize: FONT_SIZES.s,
  } as TextStyle,
};

export { FONT_SIZES, TEXT_VARIANTS };
