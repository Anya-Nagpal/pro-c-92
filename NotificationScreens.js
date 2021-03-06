import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import SwipeableFlatlist from '../components/SwipeableFlatList';
import db from '../Config';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: firebase.auth().currentUser.email,
      allNotifications: [],
    };

    this.notificationRef = null;
  }

  getNotifications = () => {
    this.notificationRef = db
      .collection('all_notifications')
      .where('notification_status', '==', 'unread')
      .where('targeted_user_id', '==', this.state.userId)
      .onSnapshot((snapshot) => {
        var allNotifications = [];
        snapshot.docs.map((doc) => {
          var notification = doc.data();
          notification['doc_id'] = doc.id;
          allNotifications.push(notification);
        });
        this.setState({
          allNotifications: allNotifications,
        });
      });
  };

  componentDidMount() {
    this.getNotifications();
  }

  componentWillUnmount() {
    this.notificationRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        leftElement={<Icon name="book" type="font-awesome" color="#696969" />}
        title={item.book_name}
        titleStyle={styles.LiTitle}
        subtitle={item.message}
        bottomDivider
      />
    );
  };

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <View style={{ flex: 0.13 }}>
            <MyHeader
              title={'Notifications'}
              navigation={this.props.navigation}
            />
          </View>
          <View style={{ flex: 0.8 }}>
            {this.state.allNotifications.length === 0 ? (
              <View style={styles.imageView}>
                <Image source={require('../assets/Notification.png')} 
                style={{width: 250, height: 340,marginTop: 170 }}
                />
                <Text style={{ fontSize: 30, marginTop:10 }}>You have no notifications</Text>
              </View>
            ) : (
              <SwipeableFlatlist
                allNotifications={this.state.allNotifications}
              />
            )}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#deeeed',
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor: '#deeeed',
  },
  LiTitle: {
    color: 'black',
    fontWeight: 'bold',
     backgroundColor: '#deeeed',
  },
});
