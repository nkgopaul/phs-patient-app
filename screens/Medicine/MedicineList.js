import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
} from "react-native";
import Medicine from "./Medicine";

export default class MedicineList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mockMedications = [
      { 
        id: 1,
        name: 'Atorvastatin',
        dosageAmount: '10 mg',
        dosageInstructions: 'One tablet per day with or without food.',
        notes: 'Do not take with cyclosporine, gemfibrozil, pazopanib, orred yeast rice.',
        url: 'https://www.webmd.com/drugs/2/drug-841/atorvastatin-oral/details',
      },
      {
        id: 2,
        name: 'Acebutolol',
        dosageAmount: '5 mg',
        dosageInstructions: 'One tablet per day with or without food.',
        notes: 'Do not take with fingolimod. This drug may reduce blood flow - dress warmly and avoid tobacco use.',
        url: 'https://www.webmd.com/drugs/2/drug-4365/acebutolol-oral/details', 
      },
      {
        id: 3,
        name: 'Ibuprofen',
        dosageAmount: '15 mg',
        dosageInstructions: 'Use as described by the instructions on the generic brand.',
        notes: 'Adverse interactions with ACE inhibitors and alcohol.',
        url: 'https://www.webmd.com/drugs/2/drug-5166-9368/ibuprofen-oral/ibuprofen-oral/details',
      },
      {
        id: 4,
        name: 'Vitamin D',
        dosageAmount: '600 IU',
        dosageInstructions: 'One tablet per day',
        notes: 'Moderate interactions may occur with digoxin and diltiazem.',
        url: 'https://www.webmd.com/vitamins/ai/ingredientmono-929/vitamin-d',
      },
    ];

    return (
      <ScrollView>
        {mockMedications.map(e => 
          <Medicine
            key={e.id}
            name={e.name}
            dosageAmount={e.dosageAmount}
            dosageInstructions={e.dosageInstructions}
            notes={e.notes}
            url={e.url}
            />
        )}
      </ScrollView>
  );
  }
}