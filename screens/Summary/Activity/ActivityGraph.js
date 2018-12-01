import React from 'react';
import { View } from 'react-native';
import { VictoryPie, VictoryLegend } from "victory-native";

export default class ActivityGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    getActivityBreakdown() {
        let finalMeasures = [
            {x: "Silent", y: 0, fill:'gold'},
            {x: "Walking", y: 0},
            {x: "Running", y: 0},
            {x: "NonWear", y: 0},
            {x: "REM", y: 0},
            {x: "NREM", y: 0},
            {x: "Charging", y: 0},
            {x: "Other", y: 0},
        ];

        this.props.activityMeasures.forEach(e => {
            e.activity_type >= 0 && e.activity_type <= 6 ? finalMeasures[e.activity_type].y++ : finalMeasures[7].y++;
        });
        console.log(finalMeasures);
        return finalMeasures;
    }

    render() {
        return(
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{paddingTop: 20, paddingLeft: 80}}>
                    <VictoryLegend 
                        gutter={20}
                        orientation="vertical"
                        style={{
                            data: { stroke: "black"},
                        }}
                        height={55}
                        itemsPerRow={2}
                        data={[
                            { name: "Silent", symbol: { fill: "lightskyblue"} },
                            { name: "Walking", symbol: { fill: "darkgray" } },
                            { name: "Running", symbol: { fill: "palegreen" } },
                            { name: "NonWear", symbol: { fill: "mediumaquamarine" } },
                            { name: "REM", symbol: { fill: "lightcoral" } },
                            { name: "NREM", symbol: { fill: "plum" } },
                            { name: "Charging", symbol: { fill: "palevioletred" } },
                            { name: "Other", symbol: { fill: "antiquewhite" } },
                        ]}
                    />
                </View>
                <VictoryPie
                    colorScale={["lightskyblue", "darkgray", "palegreen", "mediumaquamarine", "lightcoral", "plum", "palevioletred", "antiquewhite"]}
                    data={this.getActivityBreakdown()}
                    labels={() => null}
                />
            </View>
        );
    }
}