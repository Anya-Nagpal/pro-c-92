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
import MyHeader from '../components/MyHeader'

export default class V3 extends React.Component {
  goToV4=()=>{
    this.props.navigation.navigate('V4')
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
        <MyHeader
        navigation={this.props.navigation} 
        />
        <Text style={styles.diet}>
        PLAN 3
        </Text>
          <Image
            source={require('../assets/vp3.jpg')}
            style={{ width: 330, height: 250, marginTop: 80, alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}
          />
          <TouchableOpacity 
          onPress={()=>{
            this.goToV4()
          }}
          >
            <Text style={styles.t1}>Next Week's Plan => 
            </Text>
          </TouchableOpacity>
          <Image 
           source={require('../assets/s1.png')}
            style={{ width: 50, height: 50, marginTop: 50, marginLeft: 200 }}
          />
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#CCFFCC' },
  t1: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(25),
    fontWeight: '50',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: RFValue(40)
  },
  diet: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(50),
    fontWeight: RFValue(30),
    textAlign: 'center',
     marginTop: RFValue(30)
  },
});
