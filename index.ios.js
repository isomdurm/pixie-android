/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';

export default class PixieAndroid extends Component {
  render() {
    return (
      <View style={styles.signContainer}>
        <View style={styles.signInContainer}>
          <View style={styles.signInButtonContainer}>
            <Button onPress={this._signIn} title="Sign In" color="#FFFFFF" accessibilityLabel=""/>
          </View>
          <View style={styles.signUpButtonContainer}>
            <Button onPress={this._signUp} title="Sign Up" color="#FFFFFF" accessibilityLabel=""/>
          </View>
        </View>
      </View>
    );
  }

  _signIn() {
   Alert.alert('on Press!');
  }

  _signUp() {
   Alert.alert('on Press!');
  }
}

const styles = StyleSheet.create({
  signContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  signInContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  signUpContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#F5FCFF',
    width: 200,
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  signInButtonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    width: 100,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  signUpButtonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
});

AppRegistry.registerComponent('PixieAndroid', () => PixieAndroid);
