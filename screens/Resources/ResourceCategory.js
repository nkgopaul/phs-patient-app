import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Linking,
} from "react-native";
import Collapsible from 'react-native-collapsible';
import { Icon } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class ResourceCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        }
    }

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    render() {
        return(
            <View>
                <TouchableOpacity onPress={this.toggleExpanded}>
                    <View style={styles.headerContainer}>
                        <MaterialCommunityIcons 
                            name={this.props.icon_name}
                            size={26}
                            color='black'
                            style={{paddingLeft: 10}}
                        />
                        <Text style={styles.headerText}>{this.props.name}</Text>
                        <Icon.Ionicons
                          name='md-arrow-dropdown'
                          size={20}
                          style={this.state.collapsed ? styles.arrowClosed : styles.arrowOpen}
                          color='black'
                        />
                    </View>
                </TouchableOpacity>
                <Collapsible collapsed={this.state.collapsed}>
                    <View style={styles.contentContainer}>
                        {
                            this.props.resources.map(e => 
                                <View style={styles.contentRowContainer} key={e.name}>
                                    <Text style={{fontSize: 15}}>{'• '}</Text>
                                    <Text
                                        style={styles.linkText}
                                        onPress={() => { Linking.openURL(e.url) }}
                                    >
                                        {e.name}
                                    </Text>
                                </View>
                        )}
                    </View>
                </Collapsible>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 35,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    headerText: {
        fontSize: 18,
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
    arrowClosed: {
        marginLeft: 8,
        transform: [{ rotate: '180deg'}]
    },
    arrowOpen: {
        marginLeft: 8
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 10,
    },
    contentRowContainer: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    linkText: {
        fontSize: 15, 
        textDecorationLine: 'underline',
    }
});