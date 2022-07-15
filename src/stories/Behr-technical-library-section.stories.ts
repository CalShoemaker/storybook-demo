import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import BehrTechnicalDataSheets from 'src/app/shared/BehrTechnicalDataSheets/behr-technical-data-sheets.component';
import BehrSafetyDataSheets from 'src/app/shared/BehrSafteyDataSheets/behr-safety-data-sheets.component';
import BehrMasterSpec from 'src/app/shared/BehrMasterSpec/behr-master-spec.component';
import BehrTechnicalLibraryComponent from 'src/app/shared/BehrTechnicalLibrarySection/behr-technical-library-section.component';

export default {
  title: 'Example/Behr Technical Library Section',
  component: BehrTechnicalLibraryComponent,
  decorators: [
    moduleMetadata({
      declarations: [BehrTechnicalDataSheets,BehrSafetyDataSheets,BehrMasterSpec],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<BehrTechnicalLibraryComponent> = (args: BehrTechnicalLibraryComponent) => ({
  props: args
});

export const Default = Template.bind({});
Default.args = {
  Header: "Behr Technical Library",
  Subheader: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
};

