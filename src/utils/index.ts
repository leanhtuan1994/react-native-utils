import { Platform } from 'react-native';
import { getSystemVersion } from 'react-native-device-info';

export const iOS = Platform.OS === 'ios';
export const isIOS13 = iOS
  ? parseInt(getSystemVersion().split('.')[0], 10) > 12
  : false;
