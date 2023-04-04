/**
 *  Component Story Format (CSF) is now encouraged.
 *  More info here: https://storybook.js.org/docs/react/api/csf
 */

import { ComponentStory } from "@storybook/react";
import React, { ReactElement } from "react";

import { Header } from "./Header";

export default {
    title: "TSX/Header",
    component: Header,
    argTypes: {
        onClick: {
            control: {
                type: "object",
            },
        },
    },
};

const HeaderStory: ComponentStory<typeof Header> = (args): ReactElement => {
    // Shared props may be passed here
    return <Header {...args} />;
};

// Story specific props are passed here
const toggleEnabled = HeaderStory.bind({});
toggleEnabled.args = {
    isToggled: true,
};

const toggleDisabled = HeaderStory.bind({});
toggleDisabled.args = {
    isToggled: false,
};

export { toggleEnabled, toggleDisabled };
