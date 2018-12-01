import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import HRGraph from './HeartRate/HRGraph';
import StepGraph from './StepCount/StepGraph';
import StepTracker from './StepCount/StepTracker';
import ActivityGraph from './Activity/ActivityGraph';
import { UserConsumer } from '../../UserContext';


export default class Summary extends React.Component {
    static navigationOptions = {
        title: 'Your Daily Summary',
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
                                    <Text style={styles.metricHeader}>Current HR</Text>
                                    <Text style={styles.metricEntry}>79 BPM</Text>
                                </View>
                                <View style={styles.metricContainer}>
                                    <Text style={styles.metricHeader}>Target HR</Text>
                                    <Text style={styles.metricEntry}>85 BPM</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.sectionTextContainer}>
                                <Text style={styles.sectionText}>👣 Steps</Text>
                            </View>
                            <StepGraph 
                                stepMeasures={userData.step_measures}
                            />
                            <StepTracker
                                totalSteps={userData.step_measures.reduce((acc, obj) => acc + obj['num_steps'], 0)}
                                targetSteps={3000}
                            />
                        </View>
                        <View style={styles.container}>
                            <View style={styles.sectionTextContainer}>
                                <Text style={styles.sectionText}>🤸 Activity</Text>
                            </View>
                            <ActivityGraph
                                activityMeasures={userData.activity_type_measures}
                            />
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
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
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
    },
    metricEntry: {
        textAlignVertical: 'center',
        fontSize: 14,
    }
});