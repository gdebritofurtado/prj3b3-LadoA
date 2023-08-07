import { View, Text, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () =>{
  const [inputValues, setInputValues] = useState({
    input: '',
    
  });
  const [sum, setSum] = useState(0);
  const handleInputChange = (inputName) => {
    setInputValues({...inputValues, [inputName]: value});

  };
  const handlesSum = () =>{
    const {imput} = inputValues;
    const result = parseInt(input1);
    setSum(result);
  };

  return(
    <View style={Styles.container}>
    <Text style={styles.label}>Input: </Text>
    <TextInput
    style={styles.input}
    onChangeText={(value) => handleInputChange('input1', value)}
    value={inputValues.input1}
    keyboardType="numeric"
  />

<Button title="Somar" onPress={handlesSum}/>
<Text style={styles.result}>Resultado: {sum}</Text>



  </View>
  )

};

const styles=StyleSheet.create = ({
  container:{
    flex: 1,
    backgroundcolor: '#2CDA9D',
    padding: 20,
  },

});

export default App;



