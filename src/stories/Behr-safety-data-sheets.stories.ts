import type { Story, Meta } from '@storybook/angular';

import BehrSafetyDataSheets from 'src/app/shared/BehrTechnicalDataSheets/behr-technical-data-sheets.component';

export default {
  title: 'Example/Behr Technical Data Sheets',
  component: BehrSafetyDataSheets,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<BehrSafetyDataSheets> = (args: BehrSafetyDataSheets) =>({
  props: args
});

export const Default = Template.bind({});
Default.args = {
    Header: "Safety Data Sheets",
    Subheader: "Look up Safety Data Sheets for all BEHR® and KILZ® Paints and Primers."
};

