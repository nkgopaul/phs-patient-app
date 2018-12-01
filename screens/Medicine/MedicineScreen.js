import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MedicineList from "./MedicineList";
import { UserConsumer } from '../../UserContext';

export default class MedicineScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Medications',
  };

  render() {
    return (
      <View> 
        <UserConsumer>
          {({ userData }) => (
            <MedicineList
            //pass props here when backend is finished
            />
            )}
        </UserConsumer>
        <View style={styles.addMedicine}>
          <Text style={{fontSize: 40, color: 'white'}}>+</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addMedicine: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor: '#4286f4',
    position: 'absolute',
    marginTop: 470,
    marginLeft: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});