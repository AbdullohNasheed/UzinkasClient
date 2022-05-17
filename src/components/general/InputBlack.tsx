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
    paddingVertical: 10,
    fontSize: 16,
    marginVertical: 5,
    color: '#fff',
  },
  inputContainer: {
    paddingHorizontal: 15,
    backgroundColor: '#181926',
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 5,
  },
  iconStyles: {
    marginRight: 10,
  },
});
