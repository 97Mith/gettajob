import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInputMask } from "react-native-masked-text";

const InputField = ({
  icon,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  maskType,
  options,
}) => {
  const InputComponent = maskType ? TextInputMask : TextInput;

  return (
    <View style={styles.inputContainer}>
      <Icon name={icon} size={20} color="#fff" style={styles.icon} />
      <InputComponent
        type={maskType}
        options={maskType === "custom" ? options : undefined}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: "#fff",
  },
});

export default InputField;
