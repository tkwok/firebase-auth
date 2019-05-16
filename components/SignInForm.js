import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-26c32.cloudfunctions.net';

class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    const { phone, state } = this.state;
    try {
      await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });
    } catch (err) {
      console.log(err.response.data);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <Input
            label="Please Enter Phone Number"
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Input
            label="Please Enter Code"
            value={this.state.code}
            onChangeText={code => this.setState({ code })} />
          <Button title="Submit" onPress={this.handleSubmit} />
        </View>
      </View>
    )
  };
}

export default SignInForm;
