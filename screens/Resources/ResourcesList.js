import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
} from "react-native";
import ResourceCategory from "./ResourceCategory";

export default class ResourcesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mockResources = [
      { 
        id: 1,
        name: "Diseases Information",
        icon_name: "magnify",
        resources: [
          {
            name: 'Coronary Artery Disease',
            url: 'https://www.webmd.com/heart-disease/guide/heart-disease-coronary-artery-disease',
          },
          {
            name: 'Hypertension',
            url: 'https://www.webmd.com/hypertension-high-blood-pressure/default.htm',
          },
          {
            name: 'Diabetes',
            url: 'https://www.webmd.com/diabetes/default.htm',
          }
        ]
      },
      {
        id: 2,
        name: "Activities to Stay Healthy",
        icon_name: "run",
        resources: [
          {
            name: 'Yoga',
            url: 'https://www.webmd.com/balance/guide/the-health-benefits-of-yoga',
          },
          {
            name: 'Walking',
            url: 'https://www.heart.org/en/healthy-living/fitness/walking'
          },
          {
            name: 'Being Active When You Have Heart Disease',
            url: 'https://medlineplus.gov/ency/patientinstructions/000094.htm',
          }
        ]
      },
      {
        id: 3,
        name: "Eating Healthy",
        icon_name: "carrot",
        resources: [
          {
            name: 'Nutrition for Heart Disease',
            url: 'https://www.heart.org/en/healthy-living/healthy-lifestyle/how-to-help-prevent-heart-disease-at-any-age',
          },
          {
            name: 'Diabetic Diet Plan',
            url: 'https://www.niddk.nih.gov/health-information/diabetes/overview/diet-eating-physical-activity',
          },
          {
            name: 'Foods that Lower Blood Pressure',
            url: 'http://www.berkeleywellness.com/slideshow/foods-lower-blood-pressure',
          },
          {
            name: 'Diets to Lower Cholesterol',
            url: 'https://www.webmd.com/cholesterol-management/features/best-cholesterol-diets',
          }
        ]
      }
    ];

    return (
      <ScrollView>
        {mockResources.map(e => 
          <ResourceCategory
            key={e.id}
            name={e.name}
            icon_name={e.icon_name}
            resources={e.resources}
          />
        )}
      </ScrollView>
  );
  }
}