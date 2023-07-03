import Button from "../Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'SharedComponents/Button',
  component: Button,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export const Primary = {
  args: {
    primary: true,
    label: 'PrimaryButton',
  },
};

export const Secondary = {
  args: {
    label: 'SecondaryButton',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'LargeButton',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'SmallButton',
  },
};
