/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';

export default class LoginScreen extends Component {
  state = {
    user: '',
    password: '',
  };
  handleUserChange = user => {
    this.setState({user});
  };
  handlePasswordChange = password => {
    this.setState({password});
  };

  onLogin = async () => {
    const {user, password} = this.state;
    try {
      if (user.length > 0 && password.length > 0) {
        this.props.navigation.navigate('App');
      }
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const {user, password} = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#2c3e58" />
        <View style={styles.loginContainer}>
          <TextInput
            name="user"
            value={user}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Email or Mobile Num"
            placeholderTextColor="rgba(225,225,225,0.7)"
            onChangeText={this.handleUserChange}
          />
          <TextInput
            name="password"
            value={password}
            style={styles.input}
            returnKeyType="go"
            placeholder="Password"
            placeholderTextColor="rgba(225,225,225,0.7)"
            secureTextEntry
            onChangeText={this.handlePasswordChange}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.onLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e58',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff',
  },
});
