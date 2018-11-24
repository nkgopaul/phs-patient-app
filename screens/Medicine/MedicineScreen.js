import React from 'react';
import {
    Text,
    View,
} from 'react-native';


export default class MedicineScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View>
                <Text>MedicineScreen</Text>
            </View>
        )
    }
}