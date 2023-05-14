/**
 *  Component Story Format (CSF) is now encouraged.
 *  More info here: https://storybook.js.org/docs/react/api/csf
 */

import { ComponentStory } from "@storybook/react";
import React, { ReactElement } from "react";

import { Luigi } from "./Luigi";

export default {
    title: "TSX/Luigi",
    component: Luigi,
};

const LuigiStory: ComponentStory<typeof Luigi> = (args): ReactElement => {
    // Shared props may be passed here
    return <Luigi {...args} />;
};

// Story specific props are passed here
const Enabled = LuigiStory.bind({});

export { Enabled };
