import React from 'react';
import { View } from 'react-native';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";

export default class StepGraph extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View>
                <VictoryChart
                    theme={VictoryTheme.material}
                    scale={{x: "time"}}
                >
                    <VictoryAxis
                        dependentAxis={true}
                        label="Number of Steps"
                        padding={{ right: 100 }}
                        style={{ axisLabel: {padding: 30} }}
                    />
                    <VictoryAxis
                        independentAxis={true}
                        tickFormat={(x) => {
                            const timestamp = new Date(x * 1000);
                            return `${timestamp.getHours()}:${timestamp.getMinutes() < 10 ? '0' : ''}${timestamp.getMinutes()}`
                        }}
                        tickCount={10}
                        label="Time"
                        style={{ axisLabel: {padding: 30} }}
                    />  
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc"}
                        }}
                        x={"unix_timestamp"}
                        y={"num_steps"}
                        data={this.props.stepMeasures}

                    />
                </VictoryChart>
            </View>
        );
    }
}