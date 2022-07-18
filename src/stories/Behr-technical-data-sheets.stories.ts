import type { Story, Meta } from '@storybook/angular';

import BehrTechnicalDataSheets from 'src/app/shared/BehrTechnicalDataSheets/behr-technical-data-sheets.component';

export default {
  title: 'Example/Behr Technical Data Sheets',
  component: BehrTechnicalDataSheets,
  argTypes: {
    dataSheets: { control:"select", options: ['Select a Product Line','Behr','Data','Test'] }
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<BehrTechnicalDataSheets> = (args: BehrTechnicalDataSheets) =>({
  props: args
});

export const Default = Template.bind({});
Default.args = {
    Header: "Technical Data Sheets",
    Subheader: "View Technical Data Sheets for all BEHR and KILZ paints and primers"
};

