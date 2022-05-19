import React from "react";
import Card from "../RTSCard";
import { cardData } from "../fixtures/data.fixtures";

export default {
  title: "RTS-Cards/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <div style={{ width: "50%" }}>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...cardData,
};
