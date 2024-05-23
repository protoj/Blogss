import { Tag } from ".";

export default {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    state: {
      options: ["disable", "hover", "focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Tag",
    state: "disable",
    className: {},
  },
};
