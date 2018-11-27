import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import HRGraph from './HeartRate/HRGraph';
import { UserConsumer } from '../../UserContext';


export default class ActivityScreen extends React.Component {
    static navigationOptions = {
        title: 'Your Daily Activity',
    };

    render() {
        return (
            <UserConsumer>
                {({ userData }) => (
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.sectionTextContainer}>
                                <Text style={styles.sectionText}>♥ Heart Rate</Text>
                            </View>
                            <HRGraph
                                heartRateMeasures={userData.heart_rate_measures}
                            />
                            <View style={styles.metricsContainer}>
                                <View style={styles.metricContainer}>
                                    <Text style={styles.metricHeader}>Average HR</Text>
                                    <Text style={styles.metricEntry}>79 BPM</Text>
                                </View>
                                <View style={styles.metricContainer}>
                                    <Text style={styles.metricHeader}>Target HR</Text>
                                    <Text style={styles.metricEntry}>85 BPM</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                )}
            </UserConsumer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sectionTextContainer: {
        paddingTop: 10,
        paddingLeft: 10,
    },
    sectionText: {
        fontSize: 20,
    },
    metricsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingBottom: 10,
    },
    metricContainer: {
        justifyContent: 'center',
        flexDirection:'column',
        alignItems: 'center',
    },
    metricHeader: {
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    metricEntry: {
        textAlignVertical: 'center',
        fontSize: 14,
    }
});