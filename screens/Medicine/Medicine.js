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
import Barcode from 'react-native-barcode-builder';

export default class Medicine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        }
    }

    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    handlePress = () => {
        Linking.openURL(this.props.url);
    };

    render() {
        return(
            <View>
                <TouchableOpacity onPress={this.toggleExpanded}>
                    <View style={styles.headerContainer}>
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
                        <View style={styles.contentRowContainer}>
                            <MaterialCommunityIcons 
                                name='needle'
                                size={26}
                                color='black'
                                style={{paddingRight: 5}}
                            />
                            <Text style={styles.contentText}>{`${this.props.dosageAmount}, ${this.props.dosageInstructions}`}</Text>
                        </View>
                        <View style={styles.contentRowContainer}>
                            <MaterialCommunityIcons 
                                name='note-text'
                                size={26}
                                color='black'
                                style={{paddingRight: 5}}
                            />
                            <Text style={styles.contentText}>{this.props.notes}</Text>
                        </View>
                        <View style={styles.contentRowContainer}>
                            <MaterialCommunityIcons 
                                name='link'
                                size={26}
                                color='black'
                                style={{paddingRight: 5}}
                            />
                            <Text 
                                style={styles.linkText} 
                                onPress={this.handlePress}>
                                {'Click here for more info.'}
                            </Text>
                        </View>
                        <Barcode
                            value={this.props.name}
                            format="CODE128"
                            height={50}
                        />
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
        paddingLeft: 25,
        paddingTop: 5,
        paddingBottom: 5,
    },
    arrowClosed: {
        marginLeft: 8,
        transform: [{ rotate: '180deg'}]
    },
    arrowOpen: {
        marginLeft: 5
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 10,
    },
    contentText: {
        fontSize: 15
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