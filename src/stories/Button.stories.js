import Button from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  args:{color: "primary", size:'md'}
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Text = {
  args: {
    variant: "text",
    children: "Button",
  },
};

export const Large = {
  args: {
    size: "lg",
    children: "Button",
  },
};
export const Medium = {
  args: {
    size: "md",
    children: "Button",
  },
};
export const Small = {
  args: {
    size: "sm",
    children: "Button",
  },
};

export const PrimaryColor = {
  args: {
    color: "primary",
  },
};

export const WarningColor = {
  args: {
    color: "warning",
  },
};

export const ErrorColor = {
  args: {
    color: "error",
  },
};
