import React from 'react';
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import { View } from 'react-native';

export default class HRGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const contentInset = { top: 20, bottom: 20 }

        return(
            <View style={{ height: 200, flexDirection: 'row', padding: 5 }}>
                <YAxis
                    data={ this.props.heartRateMeasures }
                    contentInset={ contentInset }
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 10 }
                    yAccessor={( {item} ) => item.heart_rate_measure}
                    formatLabel={value => `${value}bpm`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16, marginRight: 16 }}
                    data={ this.props.heartRateMeasures }
                    xAccessor={( {item} ) => item.unix_timestamp}
                    yAccessor={( {item} ) => item.heart_rate_measure}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={ contentInset }
                    >
                    <Grid/>
                </LineChart>
                {/* <XAxis
                    data={ this.props.heartRateMeasures }
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 24 }
                    xAccessor={( {item} ) => item.unix_timestamp}
                    formatLabel={
                        value => {
                            const timestamp = new Date(value * 1000);
                            return `${timestamp.getHours()}:${timestamp.getMinutes()}`
                        }
                    }
                    style={{ marginHorizontal: -10 }}
                /> */}
            </View>
        );
    }
}