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

export const Needed = Template.bind({});
Needed.args = {
  ...cardData,
  owned: 0,
};

export const Owned = Template.bind({});
Owned.args = {
  ...cardData,
  owned: 1,
};
