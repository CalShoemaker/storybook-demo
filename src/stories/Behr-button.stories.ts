// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import BehrButton from './behr-button.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Example/BehrButton',
    component: BehrButton
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<BehrButton> = (args: BehrButton) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    isDisabled: false,
    type: 'orange',
    size: 'medium',
    label: 'Behr Button',
};

export const Default = Template.bind({});
Default.args = {
    isDisabled: false,
    type: 'black',
    label: 'Behr Button'
};

export const Outline = Template.bind({});
Outline.args = {
    isDisabled: false,
    type: 'outline',
    label: 'Behr Button'
};

export const Text = Template.bind({});
Text.args = {
    isDisabled: false,
    type: 'text',
    size: 'small',
    label: 'Behr Button'
};
