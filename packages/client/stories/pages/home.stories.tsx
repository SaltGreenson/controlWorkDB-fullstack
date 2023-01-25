import Home from "@/pages";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home />;

export const _Home = Template.bind({});
_Home.args = {};
