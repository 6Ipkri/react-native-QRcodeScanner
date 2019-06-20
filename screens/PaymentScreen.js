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

export default class PaymentScreen extends Component {
  static navigationOptions = {
    title: 'Payment'
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.getParam('data')
    };
  }

  render() {
    return (
      <View>
        <Text> {`Result :: ${this.state.data}`} </Text>{" "}
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        >
          <Text> Amount </Text>{" "}
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1
            }}
            onChangeText={text =>
              this.setState({
                text_amount
              })
            }
            keyboardType={"number-pad"}
            value={this.state.text_amount}
          />
        </View>
      </View>
    );
  }
}