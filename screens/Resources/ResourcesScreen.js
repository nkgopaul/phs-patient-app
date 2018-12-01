import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import ResourcesList from './ResourcesList';


export default class ResourcesScreen extends React.Component {
    static navigationOptions = {
        title: 'Resources',
    };

    render() {
        return (
            <ResourcesList />
        )
    }
}