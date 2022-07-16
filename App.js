import React, { useState } from "react";
import { SafeAreaView, Button, StyleSheet, TextInput, Text, Alert} from "react-native";

const UselessTextInput = () => {
  const [titleText, setTitleText] = useState("Operaciones Matematicas");
  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };
  const [number1, onChangeNumbe] = React.useState(null);
  const [number2, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
        </Text>
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumbe}
        value={number1}
        placeholder="Ingrese el primer numero"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number2}
        placeholder="Ingrese el segundo numero"
        keyboardType="numeric"
      />
      <Button
        title="Suma"
        onPress={() => Alert.alert(
          'Sumando')}
      /><br></br>

      <Button
        title="Resta"
        onPress={() => Alert.alert(
          'Restando')}
      /><br></br>

      <Button
        title="Division"
        onPress={() => Alert.alert(
          'Dividiendo')}
      />


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  baseText: {
    fontFamily: "Cochin"
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: `#fff8dc`,
    alignItems: 'center',
    justifyContent: 'center',
}
});

export default UselessTextInput;


