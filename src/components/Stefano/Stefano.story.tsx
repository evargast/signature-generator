import { ComponentStory } from "@storybook/react";
import React, { ReactElement } from "react";

import { Stefano } from "./Stefano";

export default {
    title: "TSX/Stefano",
    component: Stefano,
};

const StefanoStory: ComponentStory<typeof Stefano> = (args): ReactElement => {
    // Shared props may be passed here
    return <Stefano {...args} />;
};

// Story specific props are passed here
const Enabled = StefanoStory.bind({});

Enabled.args = {};

export { Enabled };
