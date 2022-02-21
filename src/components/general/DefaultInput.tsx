import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export interface DefaultInputProps {
  placeholder: string;
  icon: (props: any) => JSX.Element;
  value?: string;
  onChange?: (e: string) => void;
}

const DefaultInput = ({
  icon,
  placeholder,
  onChange,
  value,
}: DefaultInputProps) => {
  let Icon = icon;
  return (
    <View>
      <View style={styles.inputContainer}>
        <Icon style={styles.iconStyles} />
        <TextInput
          placeholderTextColor={'rgba(62, 62, 62, 1)'}
          placeholder={placeholder}
          style={styles.registerIcon}
          onChangeText={onChange}
          value={value}
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
    marginVertical: Platform.OS === 'ios' ? 20 : 6,
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
});
