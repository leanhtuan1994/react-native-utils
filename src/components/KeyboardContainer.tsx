import React from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { iOS, isIOS13 } from '../utils';

const KeyboardContainer: React.FC<
  KeyboardAvoidingViewProps & { modal?: boolean }
> = ({ style, modal, ...props }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={StyleSheet.compose(
        { flex: 1, marginBottom: iOS ? bottom : 0 },
        style
      )}
      behavior="padding"
      keyboardVerticalOffset={
        Platform.OS === 'ios'
          ? 8 + (modal && isIOS13 ? (bottom || 16) + 16 : 0)
          : 4
      }
      {...props}
    />
  );
};

export default KeyboardContainer;
