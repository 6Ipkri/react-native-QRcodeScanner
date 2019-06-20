import React from "react";
import { Button, View, Text, TextInput } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import QRCodeScanner from "react-native-qrcode-scanner";
 // Version can be specified in package.json

class HomeScreen extends React.Component {

  onSuccess = e => {
    var getData = e.data;   
    this.props.navigation.navigate("Details", { 
      digio: getData.substring(0, 5),
      phoneNumber: getData.substring(6,16),
      type: getData.substring(17,getData.length)});
  };

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        reactivate={true}
        reactivateTimeout={20}
      />
    );
  }
}

class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const digio = navigation.getParam("digio");
    const phoneNumber = navigation.getParam("phoneNumber");
    const type = navigation.getParam("type");

    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{marginBottom:40}}>Digio: {JSON.stringify(digio)}</Text>
        <Text style={{marginBottom:40}}>Phone number: {JSON.stringify(phoneNumber)}</Text>
        <Text style={{marginBottom:40}}>Type: {JSON.stringify(type)}</Text>
          <Text>Amount:</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1,marginBottom: 40 }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            keyboardType={"number-pad"}
            numberOfLines={1}
            maxLength={40}
          />
        <Button
          title="OK"
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
