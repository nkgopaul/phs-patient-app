import React from 'react';
import {
    Text,
    View,
} from 'react-native';


export default class InboxScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View>
                <Text>InboxScreen</Text>
            </View>
        )
    }
}