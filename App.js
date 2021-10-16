import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const listData = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
]

const App = () => {

  const [listOpen, setListOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    gender: '',
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.textBox}>
          <TextInput
            style={styles.text}
            placeholder="Name"
            defaultValue={formValue.name}
            onChangeText={(item) => setFormValue({
              ...formValue,
              name: item
            })}
          />
        </View>
        {/* <Text style={styles.errorText}>Error</Text> */}

        <View style={styles.textBox}>
          <TextInput
            style={styles.text}
            placeholder="Email"
            defaultValue={formValue.email}
            onChangeText={(item) => setFormValue({
              ...formValue,
              email: item
            })}
          />
        </View>
        {/* <Text style={styles.errorText}>Error</Text> */}

        <DropDownPicker
          style={styles.dropdown}
          placeholder="Select your gender"
          open={listOpen}
          setOpen={itemValue => setListOpen(itemValue)}
          items={listData}
          value={formValue.gender}
          setValue={(item) => setFormValue({
            ...formValue,
            gender: item(),
          })}
        />
        {/* <Text style={styles.errorText}>Error</Text> */}
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Form Value", JSON.stringify(formValue))}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  container: {
    width: '90%',
  },
  textBox: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    paddingStart: 5,
    borderColor: "#e4e4e4",
    borderWidth: 1,
    alignSelf: 'stretch',
    marginVertical: 7,
  },
  text: {
    fontSize: 15,
    paddingVertical: 10
  },
  errorText: {
    color: 'red'
  },
  dropdown: {
    borderColor: '#e4e4e4',
    backgroundColor: '#fafafa',
    marginVertical: 10
  },
  button: {
    width: '100%',
    backgroundColor: '#517CFF',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 20
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center'
  }
});

export default App;

