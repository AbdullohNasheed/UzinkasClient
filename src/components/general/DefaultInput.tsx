import {types} from '@babel/core';
import React from 'react';
import {
  Dimensions,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export interface DefaultInputProps {
  placeholder?: string;
  keyboardType?: string;
  icon: (props: any) => JSX.Element;
  value?: string;
  onChange?: (e: string) => void;
  hasError?: boolean;
}

const DefaultInput = ({
  icon,
  placeholder,
  onChange,
  value,
  hasError,
  keyboardType,
}: DefaultInputProps) => {
  let Icon = icon;
  return (
    <View>
      <View style={[styles.inputContainer, hasError && styles.errorContainer]}>
        <Icon style={styles.iconStyles} fill={hasError ? 'red' : '#009899'} />
        <TextInput
          placeholderTextColor={'rgba(62, 62, 62, 1)'}
          placeholder={placeholder}
          style={styles.registerIcon}
          onChangeText={onChange}
          value={value}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default DefaultInput;

const styles = StyleSheet.create({
  registerIcon: {
    // backgroundColor: 'red',
    fontSize: 19,
    width: '82%',
    marginVertical: 7,
    color: '#fff',
  },
  inputContainer: {
    backgroundColor: 'rgba(36, 37, 49, 1)',
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
  },
  iconStyles: {
    marginHorizontal: 10,
  },
  errorContainer: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
