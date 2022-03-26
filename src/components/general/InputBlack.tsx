import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export interface InputBlackProps {
  placeholder?: string;
  value?: string;
  keyboardType?: string;
  icon: (props: any) => JSX.Element;
  onChange: (value: string) => void;
}

const InputBlack = ({icon, placeholder, value, onChange, keyboardType}: InputBlackProps) => {
  let Icon = icon;
  return (
    <View>
      <View style={styles.inputContainer}>
        <Icon style={styles.iconStyles} />
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholderTextColor={'rgba(62, 62, 62, 1)'}
          placeholder={placeholder}
          style={styles.registerIcon}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default InputBlack;

const styles = StyleSheet.create({
  registerIcon: {
    // backgroundColor: 'red',
    fontSize: 19,
    width: '78%',
    marginVertical: Platform.OS === 'ios' ? 20 : 10,
    color: '#fff',
  },
  inputContainer: {
    backgroundColor: '#181926',
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
  },
  iconStyles: {
    marginHorizontal: 15,
  },
});
