import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  const [inputValues, setInputValues] = useState({
    input1: '', // Corrigido para "input1"45
    input2:'', 
  });
  const [sum, setSum] = useState(0);

  const handleInputChange = (inputName, value) => { // Corrigido para passar o valor
    setInputValues({ ...inputValues, [inputName]: value });
  };

  const handleSum = () => {
    const { input1,input2 } = inputValues;
    const result = parseInt(input1) + parseInt(input2); // Lidando com entrada vazia
    setSum(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Input: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input1', value)}
        value={inputValues.input1}
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Input2: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('input2', value)}
        value={inputValues.input2}
        keyboardType="numeric"
      />

      <Button title="Somar" onPress={handleSum} />
      <Text style={styles.result}>Resultado: {sum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2CDA9D', // Corrigido para "backgroundColor"
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  result: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default App;



