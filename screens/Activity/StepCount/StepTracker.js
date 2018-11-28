import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Progress from 'react-native-progress';

export default class StepTracker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <View style={{padding: 10}}>
                <View style={styles.labelsContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.stepHeader}>Step Count</Text>
                        </View>
                        <View style={styles.counterContainer}>
                            <Text style={styles.stepEntry}>{`${this.props.totalSteps} / ${this.props.targetSteps} Steps`}</Text>
                        </View>
                    </View>
                <View style={styles.barContainer}>
                    <Progress.Bar
                        progress={this.props.totalSteps / this.props.targetSteps}
                        width={350}
                    />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    barContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        paddingBottom: 5,
    },
    headerContainer: {
        justifyContent: 'flex-start',
        flexDirection:'column',
        alignItems: 'center',
    },
    stepHeader: {
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    counterContainer: {
        justifyContent: 'flex-end',
        flexDirection:'column',
        alignItems: 'center',
    },
    stepEntry: {
        textAlignVertical: 'center',
        fontSize: 14,
    }
});