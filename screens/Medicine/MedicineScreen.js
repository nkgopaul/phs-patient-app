import React from "react";
import { Text, View } from "react-native";
import { getPatientData } from "../../lib/api";

export default class MedicineScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    getPatientData("Chris", "Riesbeck", 1477309036, 1477309756).then(data => {
      // console.error(data);
    });
  }

  render() {
    return (
      <View>
        <Text>MedicineScreen</Text>
      </View>
    );
  }
}
