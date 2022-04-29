import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import db from '../Config';
import firebase from 'firebase';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
export default class Activity extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.b}>
          <MyHeader navigation={this.props.navigation} />
          <ImageBackground
            source={require('../assets/a.jpg')}
            style={{ width: 330, height: 500 }}></ImageBackground>
          <Text style={styles.quote}>
            Don't Let Anyone Work Harder Than You Do!
          </Text>
          <TouchableOpacity style={styles.b}>
            <Text style={styles.t}>Exercise Plan!</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/cute.jpg')}
            style={{ width: 100, height: 100, marginLeft: 230, marginTop: -20}}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  t: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'HarlowSolidItalic',
    marginTop: 30,
  },
  quote: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'HarlowSolidItalic',
    textAlign: 'center',
  },
  b: {
    backgroundColor: '#FFFF99',
  },
});
