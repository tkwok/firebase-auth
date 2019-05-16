import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-26c32.cloudfunctions.net';

class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        <Input
          label="Please Enter Phone Number"
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })} />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    )
  };
}

export default SignUpForm;
