import React from "react";
import Statistics from "../Statistics";
import { allCardData, userInventory } from "../fixtures/data.fixtures";

export default {
  title: "RTS-Cards/Statistics",
  component: Statistics,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <div style={{ width: "50%" }}>
    <Statistics {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  allCardData,
  userInventory,
};
