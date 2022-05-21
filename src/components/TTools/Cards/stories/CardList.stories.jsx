import React from "react";
import CardList from "../CardList";
import { allCardData, userInventory } from "../fixtures/data.fixtures";

export default {
  title: "RTS-Cards/CardList",
  component: CardList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <div style={{ width: "50%" }}>
    <CardList {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  allCardData,
  userInventory,
};
