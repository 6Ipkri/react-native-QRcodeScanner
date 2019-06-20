import React, { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Navigator
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";

export default class QRscanScreen extends React.Component {
  
    static navigationOptions = {
    title: "ScanQR"
  };

  constructor(props){
      super(props);
  }

  onSuccess = e => {
    this.setState({ result: e.data });
     this.props.navigation.navigate("Payment", { data: e.data });
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        reactivateTimeout={15}
        reactivate={true}
      />
    );
  }
}