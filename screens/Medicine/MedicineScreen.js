import React from "react";
import { Text, View } from "react-native";
import { getPatientData } from "../../lib/api";

export default class MedicineScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>MedicineScreen</Text>
      </View>
    );
  }
}
