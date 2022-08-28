import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { ButtonProps, Button } from "./Button";
import { Story } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { title: "Primary 😃", color: "red" };
