import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAAmFiS6IAG1yHyOfZ9RNK2JJmM5r__oEk",
      authDomain: "one-time-password-26c32.firebaseapp.com",
      databaseURL: "https://one-time-password-26c32.firebaseio.com",
      projectId: "one-time-password-26c32",
      storageBucket: "one-time-password-26c32.appspot.com",
      messagingSenderId: "453570177696",
      appId: "1:453570177696:web:8f0e017e526a6ae1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
