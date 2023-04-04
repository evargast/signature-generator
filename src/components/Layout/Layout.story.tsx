import { ComponentStory } from "@storybook/react";
import React, { ReactElement } from "react";

import { Layout } from "./Layout";

export default {
    title: "TSX/Layout",
    component: Layout,
    argTypes: {
        onClick: {
            control: {
                type: "object",
            },
        },
    },
};

const LayoutStory: ComponentStory<typeof Layout> = (args): ReactElement => {
    // Shared props may be passed here
    return <Layout {...args} />;
};

// Story specific props are passed here
const LayoutEnabled = LayoutStory.bind({});

LayoutEnabled.args = {};

export { LayoutEnabled };
