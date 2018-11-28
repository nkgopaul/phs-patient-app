import React from 'react';
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';
import { View, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

export default class HRGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const contentInset = { top: 20, bottom: 20 }

        const data = [
            { quarter: 1, earnings: 13000 },
            { quarter: 2, earnings: 16500 },
            { quarter: 3, earnings: 14250 },
            { quarter: 4, earnings: 19000 }
          ];
          

        return(
            // <View style={{ height: 200, flexDirection: 'row', padding: 5 }}>
            <View style={styles.container}>
                {/* <YAxis
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
                <XAxis
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
                {/* <VictoryChart width={350} theme={VictoryTheme.material}>
                    <VictoryBar data={data} x="quarter" y="earnings" />
                </VictoryChart> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });