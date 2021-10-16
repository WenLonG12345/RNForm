import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useForm, Controller } from 'react-hook-form';

const listData = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
]

const App = () => {
  const [listOpen, setListOpen] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Controller
          control={control}
          name='name'
          render={({ field: { onChange, value } }) => (
            <View style={styles.textBox}>
              <TextInput
                style={styles.text}
                placeholder="Name"
                defaultValue={value}
                onChangeText={(v) => onChange(v)}
              />
            </View>
          )}
          rules={{
            required: {
              value: true,
              message: 'Please fill out all required fields.'
            },
          }}
        />

        {errors['name']?.message ?
          <Text style={styles.errorText}>{errors['name']?.message}</Text>
          : null}

        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, value } }) => (
            <View style={styles.textBox}>
              <TextInput
                style={styles.text}
                placeholder="Email"
                defaultValue={value}
                onChangeText={(v) => onChange(v)}
              />
            </View>
          )}
          rules={{
            required: {
              value: true,
              message: 'Please fill out all required fields.'
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter valid email.'
            },
          }}
        />

        {errors['email']?.message ?
          <Text style={styles.errorText}>{errors['email']?.message}</Text>
          : null}

        <Controller
          control={control}
          name='gender'
          render={({ field: { onChange, value } }) => (
            <DropDownPicker
              style={styles.dropdown}
              placeholder="Select your gender"
              placeholderStyle={styles.dropdownPlaceholder}
              open={listOpen}
              setOpen={() => setListOpen(!listOpen)}
              items={listData}
              value={value}
              setValue={(item) => onChange(item())}
            />
          )}
          rules={{
            required: {
              value: true,
              message: 'Please fill out all required fields.'
            }
          }}
        />

        {errors['gender']?.message ?
          <Text style={styles.errorText}>{errors['gender']?.message}</Text>
          : null}

      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={
          handleSubmit((formValue) => Alert.alert("Form Value", JSON.stringify(formValue)))
        }>
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
  dropdownPlaceholder: {
    color: '#c7c7c8',
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

