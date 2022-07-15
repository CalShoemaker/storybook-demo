import type { Story, Meta } from '@storybook/angular';

import BehrMasterSpec from 'src/app/shared/BehrMasterSpec/behr-master-spec.component';

export default {
  title: 'Example/Behr Master Spec',
  component: BehrMasterSpec,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<BehrMasterSpec> = (args: BehrMasterSpec) =>({
  props: args
});

export const Default = Template.bind({});
Default.args = {
    Header: "Behr Master Spec",
    Subheader: "Download the Behr Master Architectural Painting Specification for Section 09 90 00 Paints and Coatings."
};

