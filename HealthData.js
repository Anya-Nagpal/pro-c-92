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
export default class HealthData extends React.Component {
  goToNutrition = () => {
    this.props.navigation.navigate('Nutrition');
  };
  goToMindfullness = () => {
    this.props.navigation.navigate('Mindfullness');
  };
  goToActivity = () => {
    this.props.navigation.navigate('Activity');
  };
  goToSleep = () => {
    this.props.navigation.navigate('Sleep');
  };
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
        <MyHeader
        navigation={this.props.navigation} 
        />
          <TouchableOpacity style={{ backgroundColor: '#CCFFCC' }}>
            <Text style={styles.text}>Health Data</Text>
          </TouchableOpacity>

          <View style={styles.container}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => {
                this.goToNutrition();
              }}>
              <Image
                source={require('../assets/nutrition.png')}
                style={{ width: 120, height: 90 }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={styles.box1}
            onPress={() => {
                this.goToMindfullness();
              }}
            >
              <Image
                source={require('../assets/mindfullness.jpg')}
                style={{ width: 120, height: 90 }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={styles.box2}
            onPress={() => {
                this.goToActivity();
              }}
            >
              <Image
                source={require('../assets/activity.jpeg')}
                style={{ width: 120, height: 90 }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={styles.box3}
            onPress={() => {
                this.goToSleep();
              }}
            >
              <Image
                source={require('../assets/sleep.jpg')}
                style={{ width: 120, height: 90 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 0.2, backgroundColor: '#CCE5FF' },
  text: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(10),
    color: 'black',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: RFValue(10),
    borderColor: 'black',
    borderWidth: RFValue(5),
    width: 330,
  },
  box: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(10),
    color: 'black',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: RFValue(5),
    width: 130,
    marginTop: 100,
    borderRadius: 9,
    height: 100,
    marginLeft: 25,
  },
  box1: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(10),
    color: 'black',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: RFValue(5),
    width: 130,
    marginTop: -100,
    height: 100,
    marginLeft: 180,
    borderRadius: 9,
  },
  box2: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(10),
    color: 'black',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: RFValue(5),
    width: 130,
    marginTop: 100,
    height: 100,
    marginLeft: 25,
    borderRadius: 9,
  },
  box3: {
    fontFamily: 'HarlowSolidItalic',
    fontSize: RFValue(40),
    fontWeight: 'bold',
    paddingBottom: RFValue(10),
    color: 'black',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: RFValue(5),
    width: 130,
    marginTop: -100,
    height: 100,
    marginLeft: 185,
    borderRadius: 9,
  },
});
