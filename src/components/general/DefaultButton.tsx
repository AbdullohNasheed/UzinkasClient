import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface DefaultButtonProps {
  text: string;
  onPress?: any;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  inActive?: boolean;
  loading?: boolean;
}

const DefaultButton = ({
  text,
  style,
  textStyle,
  inActive,
  onPress = () => {},
  loading,
}: DefaultButtonProps) => {
  //   let containerStyle = styles.lightContainerStyle;
  //   let textStyle = styles.lightText;

  return (
    <TouchableOpacity
      disabled={inActive}
      style={[styles.buttonContainer, style]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={'rgba(0, 152, 153, 1)'} />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default DefaultButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    marginVertical: 15,
    paddingVertical: 13,
    borderColor: ' rgba(0, 152, 153, 1)',
  },
  buttonText: {
    fontSize: 18,
    color: 'rgba(0, 152, 153, 1)',
    fontWeight: 'bold',
  },
});
